import { Link } from "react-router-dom/cjs/react-router-dom";
const TodoList = (props) => {
    return (
        props.taskData.map((eachTask) => (
            <Link to={"/taskData/" + eachTask.id} key={eachTask.id} className="links">
                <div className='task' key={eachTask.id}>
                    <p className='task-details'>Task :{eachTask.task}</p>
                    <p className='task-details'>End Time :{eachTask.endTime}</p>
                    <p className='task-details'>Name :{eachTask.first_name}</p>
                </div>
            </Link>
        ))
    );
}

export default TodoList;