import {FaTimes} from "react-icons/fa";

const Task = ({currentTask, onDelete, onToggleReminder}) => {
    return (
        <div className={'task'} onDoubleClick={() => onToggleReminder(currentTask.id)}>
            <h3>
                {currentTask.task}
                {/*on click first calls a function to call onDelete with a parameter of the task id*/}
                <FaTimes style={{color: '#FF5A5F', cursor: 'pointer'}}
                         onClick={() => onDelete(currentTask.id)}/>

            </h3>
            <p>{currentTask.day}</p>
        </div>
    )
}

export default Task;