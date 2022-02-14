import {useState} from "react";

const AddTask = ({onAdd}) => {

    const [taskName, setTaskName] = useState('');
    const [taskDay, setTaskDay] = useState('');
    const [taskReminder, setTaskReminder] = useState(false);


    function onSubmit(event) {
        event.preventDefault();

        // input validation
        if (!taskName) {
            alert("Task name must be entered");
            return;
        }

        // pass the form values ad an object to onAdd prop
        onAdd({taskName, taskDay, taskReminder});

        // reset the form fields by resetting their state
        setTaskName('');
        setTaskDay('');
        setTaskReminder(false);
    }

    return (
        <form className={'add-form'} onSubmit={onSubmit}>
            <div className={'form-control'}>
                <label>Task Name</label>
                <input type={'text'} placeholder={'Task Name'} value={taskName}
                       onChange={(event) => setTaskName(event.target.value)}/>
            </div>

            <div className={'form-control'}>
                <label>Task Day & Time</label>
                <input type={'text'} placeholder={'Enter Day & TIme'} value={taskDay}
                       onChange={(event) => setTaskDay(event.target.value)}/>
            </div>

            <div className={'form-control form-control-check'}>
                <label>Reminder</label>
                <input type={'checkbox'} checked={taskReminder}
                       onChange={(event) => setTaskReminder(event.currentTarget.checked)}/>
            </div>

            <input type={"submit"} value={"Add Task"} className={'btn btn-block'}/>
        </form>
    );
}

export default AddTask;