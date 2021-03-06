import IndividualTask from "./IndividualTask";

const Tasks = ({taskList, onDelete, toggleReminder}) => {

    return (
        <>
            {taskList.map((task) => (
                <IndividualTask key={task.id}
                                currentTask={task}
                                onDelete={onDelete}
                                toggleReminder={toggleReminder}/>
            ))}
        </>
    )
}

export default Tasks;