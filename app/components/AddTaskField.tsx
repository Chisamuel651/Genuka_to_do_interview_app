'use client';

import React, { useState } from 'react';
import { ITask } from '@/type/task';
import { addTodo } from '@/api';
import { useRouter } from "next/navigation"
import { Loader } from 'lucide-react'; 

interface AddTaskProps {
  onAddTask: (task: ITask) => void;
}

const AddTaskField: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('');
  const [status, setStatus] = useState<ITask['status']>('Open');
  const [time, setTime] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      Promise.all(
        files.map(file =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          })
        )
      ).then(base64Files => setParticipants([...participants, ...base64Files]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !project || !time) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    const newTask: ITask = {
      id: Date.now(),
      title,
      project,
      status,
      time,
      participants,
      completed,
    };
    
    try {
        const savedTask = await addTodo(newTask);
        onAddTask(savedTask);
      } catch (error) {
        console.error('Error adding task:', error);
        alert('Failed to add task. Please try again.');
      }

    setTitle('');
    setProject('');
    setStatus('Open');
    setTime('');
    setParticipants([]);
    setCompleted(false);
    router.refresh()
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white shadow-md rounded-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full mt-1 p-2 border rounded-md"
          placeholder="Task title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Project</label>
        <input
          type="text"
          value={project}
          onChange={(e) => setProject(e.target.value)}
          className="input input-bordered w-full mt-1 p-2 border rounded-md"
          placeholder="Project name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as ITask['status'])}
          className="input input-bordered w-full mt-1 p-2 border rounded-md"
        >
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
          <option value="Archived">Archived</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Time</label>
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="input input-bordered w-full mt-1 p-2 border rounded-md"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Participants
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileUpload}
          className="input input-bordered w-full mt-1"
        />
        <div className="flex mt-2 space-x-2">
          {participants.map((participant, index) => (
            <img
              key={index}
              src={participant}
              alt={`Participant ${index + 1}`}
              className="w-10 h-10 rounded-full border"
            />
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="h-4 w-4"
        />
        <label className="text-sm font-medium text-gray-700">Completed</label>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        {isLoading ? (
          <Loader className="animate-spin w-5 h-5 text-white" />
        ) : (
          'Add Task'
        )}
      </button>
    </form>
  );
};

export default AddTaskField;
