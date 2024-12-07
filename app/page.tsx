// 'use client'
import { getAllTodos, updateTaskStatus } from "@/api";
import AddTask from "./components/AddTask";
import TaskCard from "./components/TaskCard";


export default async function Home() {
  const tasks = await getAllTodos()

  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 grid grid-cols-2 gap-4">
        <div className="text-start">
          <h1 className="text-2xl font-bold">Today's Task</h1>
          <p className="text-1xl">Saturday, 07 Dec</p>
        </div>

        <div>
          <AddTask />
        </div>
      </div>

      <div>
        <TaskCard tasks={tasks} />
      </div>
    </main>
  );
}
