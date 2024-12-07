'use client'
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AddTask from "./components/AddTask";
import TaskCard from "./components/TaskCard";
import { getAllTodos } from "@/api";
import { ITask } from "@/type/task";

const statuses = ["all", "Open", "Closed", "Archived"];

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [loading, setLoading] = useState(true);
  const status = searchParams.get("status") || "all";
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const allTasks = await getAllTodos();

      const taskCounts = {
        all: allTasks.length,
        Open: allTasks.filter((task) => task.status === "Open").length,
        Closed: allTasks.filter((task) => task.status === "Closed").length,
        Archived: allTasks.filter((task) => task.status === "Archived").length,
      };

      setCounts(taskCounts);

      const filteredTasks =
        status === "all"
          ? allTasks
          : allTasks.filter((task) => task.status === status);

      setTasks(filteredTasks);
      setLoading(false);
    };

    fetchTasks();
  }, [status]);

  const handleAddTask = (newTask: ITask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);

    setCounts((prevCounts) => ({
      ...prevCounts,
      all: prevCounts.all + 1,
      [newTask.status]: prevCounts[newTask.status] + 1,
    }));
  };

  const handleTabClick = (tabStatus: string) => {
    router.push(`/?status=${tabStatus}`);
  };

  const handleTaskStatusChange = (id: number, completed: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed } : task
      )
    );
  };

  return (
    <main className="max-w-4xl mx-auto mt-4 mb-10">
      <div className="text-center my-5 grid grid-cols-2 gap-4">
        <div className="text-start">
          <h1 className="text-2xl font-bold">Today's Task</h1>
          <p className="text-1xl">Saturday, 07 Dec</p>
        </div>
        <div>
          <AddTask onAddTask={handleAddTask} />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-around border-b mb-4">
        {statuses.map((tabStatus) => (
          <button
            key={tabStatus}
            onClick={() => handleTabClick(tabStatus)}
            className={`pb-2 ${
              status === tabStatus
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500"
            }`}
          >
            {tabStatus.charAt(0).toUpperCase() + tabStatus.slice(1)}
            <span className="text-sm text-gray-400">({counts[tabStatus] || 0})</span>
          </button>
        ))}
      </div>

      {/* Task List */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <TaskCard tasks={tasks} onStatusChange={handleTaskStatusChange} />
      )}
    </main>
  );
}
