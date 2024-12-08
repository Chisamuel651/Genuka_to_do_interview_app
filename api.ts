import { ITask } from "./type/task";

const baseUrl = 'https://genuka-to-do-interview-app-2.onrender.com';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/tasks`, {cache: 'no-store'});
    
    const todos = res.json()

    return todos
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });

    const newTodo = await res.json()
    return newTodo
}

export const updateTaskStatus = async (id: number, completed: boolean): Promise<void> => {
    await fetch(`${baseUrl}/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed }),
    });
  };
  