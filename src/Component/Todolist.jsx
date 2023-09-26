import { useState } from "react"


const Todolist = () => {

    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');

    const addTask = () => {
        if (taskText.trim()!== '') {
            setTasks([...tasks, taskText]);
            setTaskText('')
        }
    }

    const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1)
        setTasks(updatedTasks)
    }


    return (
        <div className="container mx-auto mt-8 p-4 w-50 border bg-slate-500">
            <h1 className="text-5xl font-semibold mb-4 text-center uppercase font-mono text-orange-100">To-Do List</h1>

            <div className="flex">
                <input type="text" className="border p-2 rounded-l w-full" placeholder="Add a new task" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
                <button className="bg-blue-500 text-white p-2 rounded-r font-bold hover:text-red-700" onClick={addTask} > Add </button>
            </div>

            <ul className="mt-4">
                {tasks.map((task, index) => (
                    <li key={index} className="flex justify-between items-center p-2 border-b"> 
                        {task}
                        <button className="text-red-500 hover:text-white " onClick={() => removeTask(index)}> Remove </button>
                    </li>
                ))}
            </ul>

            <div id="showBox1"></div>
        </div>
    )
}

export default Todolist