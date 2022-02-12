function HelloComponent(props) {

    return(
        <h1>Hello there, {props.username}</h1>
    )
}

HelloComponent.defaultProps = {
    username: "Guest"
}

export default HelloComponent;