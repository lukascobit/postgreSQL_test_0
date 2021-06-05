import React,{useState} from 'react'

function InputTodo() {
    
    const [input, setInput] = useState("");

    const onSubmitForm = async()=>{
        try {
            
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <h1 className="header-text">Input Todo</h1>
            <form className="input-form">
                <input value={input} onChange={e => setInput(e.target.value)} type="text" className="input-text"/>
                <button className="input-button">Add</button>
            </form>
        </div>
    )
}

export default InputTodo;
