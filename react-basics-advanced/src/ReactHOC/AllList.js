//import UsersList from "./UserList";
import SearchUsers from "./UserList";
//import ToDosList from "./ToDosList";
import SeearchToDos from "./ToDosList";
import './AllList.css';
const AllList = () => {
    return (
        <div>
            <h2>HOC</h2>
            <div className="section">
                <div><SearchUsers/></div>
                <div><SeearchToDos/></div>
            </div>
        </div>
    )
}
export default AllList;