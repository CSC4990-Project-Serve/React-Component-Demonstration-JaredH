// Task tracker imports
import {useState} from "react";
import Heading from "./Components/Heading";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import './TaskTracker.css';

// Task Tracker App
function TaskTracker() {

    // app state to show/hide add a new task
    const [showAddNewTask, setShowAddNewTask] = useState(false);

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
            task: "Wash the car",
            day: "February 12, 2022",
            reminder: false,
        },
        {
            id: 3,
            task: "Walk the dog",
            day: "February 15, 2022",
            reminder: true,
        },
        {
            id: 4,
            task: "Mow the lawn",
            day: "February 14, 2022",
            reminder: false,
        },
        {
            id: 5,
            task: "Learn React",
            day: "April 20, 2022",
            reminder: true,
        },
    ]);

    // // Testing how to get date from an API and add assign it to the state
    // const [task2, setTasks2] = useState(
    //     fetch("https://catfact.ninja/fact")
    //         .then((response) => console.log(response.json()))
    // );

    // Delete a task function (Send as a prop down the component chain)
    const deleteATask = (id) => {
        // console.log("delete", id)
        setTasks(tasks.filter((task) => (task.id !== id)))
    }

    // Add a task function
    const addATask = (newTask) => {
        // console.warn(newTask);
        const taskId = tasks[tasks.length - 1].id + 1;
        const tempTask = {id: taskId, task: newTask.taskName, day: newTask.taskDay, reminder: newTask.taskReminder};

        setTasks([...tasks, tempTask]);
    }

    // Toggle reminder (sent as a prop down the component chain)
    const toggleReminder = (id) => {
        // console.warn(id)
        // setTasks(tasks.map((task) => (task.id === id ? {...task, reminder: !task.reminder} : task)))
        setTasks(tasks.map((task) => (task.id === id) ? {...task, reminder: !task.reminder} : task));
    }


    return (
        <div className={'container'}>
            <Heading onAddButtonClicked={() => setShowAddNewTask(!showAddNewTask)} showAddTaskState={showAddNewTask}/>
            {/*{showAddNewTask ? <AddTask onAdd={addATask}/> : ''}*/}
            {showAddNewTask && <AddTask onAdd={addATask}/>}
            {tasks.length > 0 ? <Tasks taskList={tasks} onDelete={deleteATask} toggleReminder={toggleReminder}/> :
                <h6>No Tasks</h6>}

        </div>
    )
}


export default TaskTracker;