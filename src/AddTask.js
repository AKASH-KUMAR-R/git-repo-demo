import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const AddTask = () => {

    const [task, setTask] = useState('');
    const [endTime, setDate] = useState('');
    const [first_name, setName] = useState('');
    const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.reload();
        const data = { task, endTime, first_name };

        fetch('http://localhost:8000/taskDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("Data added to the server");
            history.push('/home');
        })
    }
    return (

        <div className="login-container">
            <h1>Add A New Task</h1>
            <form onSubmit={handleSubmit}>
                <label>Task : </label>
                <input
                    type="text"
                    required
                    value={task}
                    onChange={(event) => {
                        setTask(event.target.value);
                    }}>
                </input><br></br><br></br>
                <label> End Date : </label>
                <input
                    type="date"
                    required
                    value={endTime}
                    onChange={(event) => {
                        setDate(event.target.value);
                    }}>
                </input><br></br><br></br>
                <label>Name : </label>
                <input
                    type="text"
                    required
                    value={first_name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}>
                </input><br></br><br></br>
                <input type="submit" className="submit-button"></input>
            </form>
        </div>
    );
}

export default AddTask;