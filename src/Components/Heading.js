import Button from "./Button";

function Heading(props) {

    const onClickNewTask = () => {
        console.log("New Task Requested clicked");
    }

    return(
        <header className={'header'}>
            <h1>{props.title}</h1>
            <Button color={'#087E8B'}
                    text={'Add Task +'}
                    onClick={onClickNewTask}
            />
        </header>
    )
}

Heading.defaultProps = {
    title: "Task Tracking System"
}

export default Heading;