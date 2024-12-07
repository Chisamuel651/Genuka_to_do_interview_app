'use client'
import React from 'react'
import Image from "next/image";
import { ITask } from '@/type/task';
import Task from './Task';
import { updateTaskStatus } from '@/api';

interface TodoListProps {
  tasks: ITask[]
  onStatusChange: (id: number, completed: boolean) => void;
}

const TaskCard: React.FC<TodoListProps> = ({ tasks, onStatusChange }) => {
  
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onStatusChange={onStatusChange} />
      ))}
    </div>

  )
}

export default TaskCard
