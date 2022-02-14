import Button from "./Button";

function Heading(props) {

    const onClickNewTask = () => {
        props.onAddButtonClicked();
    }

    return(
        <header className={'header'}>
            <h1>{props.title}</h1>
            <Button color={props.showAddTaskState ? '#d51f2f' : '#087E8B'} text={props.showAddTaskState ? "Close" : 'Add Task +'} onClick={onClickNewTask}/>
        </header>
    )
}

Heading.defaultProps = {
    title: "Task Tracking System"
}

export default Heading;