import React, {useEffect, useState} from 'react';
import EditTodo from './EditTodo';

function ListTodos() {

    const [todos, setTodos] = useState([]);
    const [checked, setChecked] = useState(false)

    //delete
    const deleteTodo = async (id)=>{
        try {
            const deleteTodo = await fetch(`http://localhost:3000/todos/${id}`,{
                method: "PUT"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id))
            
        } catch (error) {
            console.error(error.message);
        }
    }
    //setting if checked
    async function setTheChecked(e, todo){
        setChecked(!checked)
        e.preventDefault()
         try {
             const body = {checked};
             const response  = await fetch(`http://localhost:3000/todos/${todo.todo_id}`,{
                 method: "PUT",
                 headers: {"Content-Type": "application/json"},
                 body: JSON.stringify(body)
             });
             window.location = "/";
         } catch (error) {
             console.error(error.message);
         }
    }

    async function getTodos(){
        try {
            const response = await fetch("http://localhost:3000/todos");
            const jsonData = await response.json();
            setTodos(jsonData)
        } catch (error) {
            console.error(error.message);
        }
    }
    
    useEffect(()=>{
        getTodos();
    }, [])

    
    return (
        <div className="list-todos">
            <h1>List todos</h1>
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Done</th>
                    </tr>
                </thead>
                <tbody>
                
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td><EditTodo todo={todo}/></td>
                        <td><button onClick={()=> deleteTodo(todo.todo_id)} className="delete">Delete</button></td>
                        <td><input onChange={(e, todo) => setTheChecked(e, todo)} type="checkbox"/></td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default ListTodos;
