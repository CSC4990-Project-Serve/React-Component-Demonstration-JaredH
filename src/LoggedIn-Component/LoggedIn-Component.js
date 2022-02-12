function LoggedInComponent(props) {
    const isLoggedIn = !!props.user; //!! convert to boolean value no matter what

    if (isLoggedIn) {
        return (
            <h1>
                <strong>Logged In as {props.user[0].first_name}</strong>
                <p>User Info:</p>
                <ul>
                    <li>{props.user[0].id}</li>
                    <li>{props.user[0].first_name}</li>
                    <li>{props.user[0].last_name}</li>
                    <li>{props.user[0].email}</li>
                    <li>{props.user[0].gender}</li>
                    <li>{props.user[0].ip_address}</li>
                </ul>
            </h1>
        )
    } else {
        return (
            <div>
                <h1>Not Logged in {}</h1>
            </div>
        )
    }

}

export default LoggedInComponent