import React, {useEffect, useState} from 'react';
import EditTodo from './EditTodo';

function ListTodos() {

    const [todos, setTodos] = useState([]);

    //delete
    const deleteTodo = async (id)=>{
        try {
            const deleteTodo = await fetch(`http://localhost:3000/todos/${id}`,{
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (error) {
            console.log(error.message);
        }
    }

    async function getTodos(){
        try {
            const response = await fetch("http://localhost:3000/todos");
            const jsonData = await response.json();
            setTodos(jsonData)
        } catch (error) {
            console.log(error.message);
        }
    }
    
    useEffect(()=>{
        getTodos();
    }, [])

    console.log(todos);
    return (
        <div className="list-todos">
            <h1>List todos</h1>
            <table className="table">
                <thead>
                    <tr className="table-header">
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td><EditTodo/></td>
                        <td><button onClick={()=> deleteTodo(todo.todo_id)} className="delete">Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default ListTodos;
