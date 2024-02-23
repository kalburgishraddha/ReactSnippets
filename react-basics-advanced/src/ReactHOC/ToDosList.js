import React, {useEffect,useState} from "react";
import HOC from "./HOC";
const ToDosList = ({data}) => {
    /*const [todos, setTodos] = useState([]);
    const [term,setTerm] = useState("");

    useEffect(()=> {
        const fetchTodos = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");
            const json = await res.json();
            setTodos(json);
            console.log(json)
        };
        fetchTodos();
    },[]);*/

    let renderTodos = data.map((todo)=>{
        return(
            <div key={todo.userId}>
                <p>
                    <strong>{todo.title}</strong>
                </p>
            </div>
        );
    });

    /*let filterTodos = todos.slice(0,10)
    .filter(({title})=>{
        return title.indexOf(term) >=0;
    }).map((todo)=>{
        return(
            <div key={todo.userId}>
                <p>
                    <strong>{todo.title}</strong>
                </p>
            </div>
        );
    })*/

   

    return(<div>
    {/*<input type="text" value={term} onChange={(e)=>setTerm(e.target.value)}/>
    {filterTodos}*/}
    {renderTodos}
    </div>)

}
const SeearchToDos =HOC(ToDosList,"posts");
export default SeearchToDos;
//export default ToDosList;