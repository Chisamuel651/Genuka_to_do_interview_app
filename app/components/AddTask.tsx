'use client'
import { Plus } from "lucide-react"
import Modal from "./Modal"
import { useState } from "react"
import AddTaskField from "./AddTaskField"
import { ITask } from "@/type/task"

interface AddTaskProps {
    onAddTask: (task: ITask) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
    const [ modalOpen, setModalOpen ] = useState<boolean>(false)

    const handleAddTask = (task: ITask) => {
        onAddTask(task)
        setModalOpen(false);
      };

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="btn btn-primary bg-[#e5ecf9] text-[#3a64dd] border-0 shadow-sm"> <Plus size={18} /> New Task</button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <AddTaskField onAddTask={handleAddTask} />
      </Modal>
    </div>
  )
}

export default AddTask
