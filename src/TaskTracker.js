// Task tracker imports
import {useState} from "react";
import Heading from "./Components/Heading";
import Tasks from "./Components/Tasks";
import './TaskTracker.css';

// Task Tracker App
function TaskTracker() {

    // global app state for this task list
    const [tasks, setTasks] = useState([
        {
            id: 1,
            task: "Bush teeth",
            day: "February 12, 2022",
            reminder: false,
        },
        {
            id: 2,
            task: "Floss teeth",
            day: "February 12, 2022",
            reminder: false,
        },
        {
            id: 3,
            task: "Walk the dog",
            day: "February 15, 2022",
            reminder: true,
        },
    ]);

    // Testing how to get date from an API and add assign it to the state
    const [task2, setTasks2] = useState(
        fetch("https://catfact.ninja/fact")
            .then((response) => console.log(response.json()))
    );

    // Delete a task function
    const deleteATask = (id) => {
        // console.log("delete", id)
        setTasks(tasks.filter((task) => (task.id !== id)))
    }

    // Add a task function
    const addATask = () => {

    }

    // Toggle reminder
    const toggleReminder = (id) => {
        // console.warn(id)
        setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder} : task)))
    }


    return (
        <div className={'container'}>
            <Heading/>
            {tasks.length > 0 ? <Tasks taskList={tasks} onDelete={deleteATask} toggleReminder={toggleReminder}/> :
                <h6>No Tasks</h6>}

        </div>
    )
}


export default TaskTracker;