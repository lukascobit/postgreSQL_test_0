import React, {useState} from 'react';


function EditTodo({todo}) {
   const [shouldEdit, setShouldEdit] = useState(false);
   const [description, setDescription] = useState(todo.description);

   //description update
   async function updateDescription(e){
       e.preventDefault()
        try {
            const body = {description};
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

    return (
        <div id={`id${todo.todo_id}`}>
            <button onClick={()=> setShouldEdit(!shouldEdit)}>edit</button>
            <input value={description} onChange={e => setDescription(e.target.value)} className={shouldEdit ? "text-edit" : "edit-text-invisible"} />
            <button onClick={e => updateDescription(e)} className={shouldEdit ? "text-edit" : "edit-text-invisible"} >save</button>
        </div>
    )
}

export default EditTodo;
