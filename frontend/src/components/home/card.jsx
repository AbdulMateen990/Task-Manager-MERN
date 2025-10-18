import React from "react";
import {CiHeart} from "react-icons/ci"
import { MdDelete } from "react-icons/md";
import {FaEdit} from "react-icons/fa"
import { IoAddCircleSharp} from "react-icons/io5"

const Cards = () => {
     const data = [
        {
            title: 'All Tasks',
            desc: 'View and manage all your tasks in one place. Add, edit, and organize your daily activities to complete these.',
            status: 'In Complete'
        },
        {
            title: 'Important Tasks',
            desc: 'Focus on high-priority tasks that need immediate attention. Mark tasks as important to stay productive.',
            status: 'Complete'
        },
        {
            title: 'Completed Tasks',
            desc: 'Review your accomplishments and completed tasks. Track your progress and celebrate achievements.',
            status: 'In Complete'
        },
        {
            title: 'Incomplete Tasks',
            desc: 'See all pending tasks that need your attention. Stay on top of your to-do list and deadlines.',
            status: 'In Complete'
        },
    ];
    return(
        <div className="grid grid-cols-3 gap-4 p-4">
            {data && data.map((task,i) => (
                <div className="flex flex-col justify-between bg-gray-800 rounded p-4">
                    <div>
                        <h3 className="text-xl font-semibold">{task.title}</h3>
                        <p className="text-gray-300 my-2">{task.desc}</p>
                    </div>
                    <div className="mt-4 w-full flex items-center">
                        <button className={`${task.status === "In Complete" ? 'bg-red-600' : 'bg-green-600'} px-2 py-1 rounded `}>{task.status}</button>
                        <div className="text-white p-2 w-3/6 text-2xl flex justify-around">
                        <button><CiHeart/></button>
                        <button><FaEdit /></button>
                        <button><MdDelete/></button>
                        </div>
                    </div>
                </div>                
            ))}
            <div className="flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4  text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-200">
                <IoAddCircleSharp className="text-5xl"/>
                <h2 className="text-2xl mt-4">Add Task</h2>
            </div>
        </div>
    )
}
export default Cards