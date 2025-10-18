import React from "react";
import {CgNotes} from "react-icons/cg"
import {MdLabelImportant} from "react-icons/md"
import {FaCheckDouble} from "react-icons/fa6"
import {TbNotebookOff} from "react-icons/tb"
import { Link } from "react-router-dom";

const Sidebar = () => {
    const data = [
        {
            title:'All Tasks',
            icon: <CgNotes />,
            Link: '/'
        },
        {
            title:'Important Tasks',
            icon: <MdLabelImportant />,
            Link:'/importanttasks'
        },
        {
            title:'Completed Tasks',
            icon: <FaCheckDouble />,
            Link: 'completedtasks'
        },
        {
            title:'Incompleted Tasks',
            icon: <TbNotebookOff />,
            Link: 'incompletetasks'
        },
    ]
    return(
        <>
            <div>
                <h2 className="text-xl font-semibold">Abdul Mateen</h2>
                <h4 className="my-1 text-gray-400 ">mateen@gmail.com</h4>
                <hr />
            </div>
            <div>
                {data.map((item,i) => (
                    <Link to={item.Link} key={i} className="my-2 flex items-center hover:bg-gray-600 transition-all duration-100 p-2 rounded">
                        {item.icon}&nbsp;{item.title}</Link>
                ))}
            </div>
            <div><button className="bg-gray-600 w-full p-2 rounded">Log Out</button></div>
        </>
    )
}
export default Sidebar