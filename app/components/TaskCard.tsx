import React from 'react'
import Image from "next/image";

const TaskCard = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-5 flex flex-col gap-3 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-black">Review with Client</h3>
            <p className="text-sm text-gray-500">Product Team</p>
          </div>
          <div className="flex items-center justify-center w-5 h-5 border-2 rounded-full border-gray-300">
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-500">Today</p>
            <p className="text-sm text-gray-400">01:00 PM - 03:00 PM</p>
          </div>
          <div className="flex items-center -space-x-2">
            <img
              src="/avatar1.png"
              alt="Avatar 1"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="avatar2.jpg"
              alt="Avatar 2"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-5 flex flex-col gap-3 mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-black">Review with Client</h3>
            <p className="text-sm text-gray-500">Product Team</p>
          </div>
          <div className="flex items-center justify-center w-5 h-5 border-2 rounded-full border-gray-300">
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium text-gray-500">Today</p>
            <p className="text-sm text-gray-400">01:00 PM - 03:00 PM</p>
          </div>
          <div className="flex items-center -space-x-2">
            <img
              src="/avatar1.png"
              alt="Avatar 1"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src="avatar2.jpg"
              alt="Avatar 2"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          </div>
        </div>
      </div>
    </>

  )
}

export default TaskCard
