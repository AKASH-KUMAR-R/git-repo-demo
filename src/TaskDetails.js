import { useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {

    const { id } = useParams();
    const { data: taskList, pending, error } = useFetch('http://localhost:8000/taskDate/' + id);

    const handleDeleteButton = () => {
        console.log("Task completed!!!");
    }

    return (
        <div className="task-manager">
            {pending && <p>Loading.....</p>}
            {error && <p> {error}</p>}
            {taskList && <div className="task-view">
                <button className="button-configuration" onClick={() => { handleDeleteButton() }}>Complete</button>
                <h2>{taskList.task}</h2>
                <label> Description : </label>
                <span> {taskList.first_name}</span><br></br><br></br>
                <label>Email Id : </label>
                <span> {taskList.email}</span>
            </div>}
        </div>
    );
}

export default TaskDetails;