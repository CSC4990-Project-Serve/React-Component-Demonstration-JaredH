import React from 'react';
import ReactDOM from 'react-dom';
import './cards.css';
import HelloComponent from "./HelloComponent/HelloComponent";
import TaskTracker from "./TaskTracker";

// Multiple components combined into another component that is then rendered
function App() {
    return (
        <div>
            <HelloComponent username={"Adam West"}/>
            <HelloComponent username={"Buzz Lightyear"}/>
            <HelloComponent username={"Tim Allen"}/>
            {/*below uses default props because no props were sent in */}
            <HelloComponent/>
        </div>
    );
}

let user = [
    {
        "id": 1,
        "first_name": "Codie",
        "last_name": "Espinoza",
        "email": "cespinoza0@cocolog-nifty.com",
        "gender": "Female",
        "ip_address": "53.183.29.74"
    }
];


ReactDOM.render(
    <React.StrictMode>
        {/*<Header title={1}/>*/}
        {/*<App/>*/}
        {/*<LoggedInComponent user={user}/>*/}
        <TaskTracker/>
    </React.StrictMode>,
    document.getElementById('root')
);
