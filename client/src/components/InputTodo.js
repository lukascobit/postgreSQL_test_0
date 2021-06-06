import React,{useState} from 'react'

function InputTodo() {

    
   
    
    const [description, setDescription] = useState("");

    const onSubmitForm = async e =>{
        e.preventDefault()
        try {
            const body = {description};
            const response = await fetch("http://localhost:3000/todos", {
                method: "POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/";
            
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            <h1 className="header-text">Input Todo</h1>
            <form className="input-form" onSubmit={onSubmitForm}>
                <input autoFocus value={description} onChange={e => setDescription(e.target.value)} type="text" className="input-text"/>
                <button className="input-button">Add</button>
            </form>
        </div>
    )
}

export default InputTodo;
