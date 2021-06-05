import React, {useEffect, useState} from 'react';

function ListTodos() {

    

    async function getTodos(){
        try {
            const response = await fetch("http://localhost:3000/todos");
            const jsonData = await response.json();
            console.log(jsonData);
        } catch (error) {
            console.log(error.message);
        }
    }
    
    useEffect(()=>{
        getTodos();
    })

    return (
        <div className="list-todos">
            <h1>List todos</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {/* <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> */}
                
                </tbody>
            </table>
        </div>
    )
}

export default ListTodos;
