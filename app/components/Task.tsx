'use client'

import { updateTaskStatus } from '@/api';
import { ITask } from '@/type/task'
import { useRouter } from 'next/navigation';
import React from 'react'

interface TaskProps {
    task: ITask;
    onStatusChange: (id: number, completed: boolean) => void;
}

const Task: React.FC<TaskProps> = ({task, onStatusChange }) => {
    const router = useRouter()

    const handleCheckboxClick = async () => {
        try {
          const newCompletedStatus = !task.completed;
          await updateTaskStatus(task.id, newCompletedStatus);
          onStatusChange(task.id, newCompletedStatus);
        } catch (error) {
          console.error('Error updating task status:', error);
        }
        router.refresh()
      };

  return (
    <div
          key={task.id}
          className="bg-white rounded-lg shadow-md p-5 flex flex-col gap-3 mb-4 w-[400px]"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-lg font-semibold ${
                task.completed ? 'line-through text-gray-500': 'text-black'
              }`}>{task.title}</h3>
              <p className="text-sm text-gray-500">{task.project}</p>
            </div>
            <div
                className={`flex items-center justify-center w-5 h-5 border-2 rounded-full cursor-pointer ${
                    task.completed
                    ? 'border-blue-500 bg-blue-100'
                    : 'border-gray-300'
                }`}
                onClick={handleCheckboxClick}
            >
                {task.completed && <div className="bg-blue-500 w-3 h-3 rounded-full" />}
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-gray-500">{new Date(task.time).toDateString()}</p>
              <p className="text-sm text-gray-400">{new Date(task.time).toLocaleTimeString()}</p>
            </div>
            <div className="flex items-center -space-x-2">
              {task.participants.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Avatar ${index + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </div>
  )
}

export default Task
