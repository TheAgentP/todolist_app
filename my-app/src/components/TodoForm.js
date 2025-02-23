import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault(); // prevents refreshing of page (default action)
        // DEBUG console.log(value);
        addTodo(value);
        setValue("");
    }
    return (
        <form 
            className='TodoForm' 
            onSubmit={handleSubmit}>

            <input 
                type='text' 
                className='todo-input'
                value = {value}
                placeholder='What is the task today?'
                // DEBUG CODE =>> onChange={(e) => console.log(e.target.value)}
                onChange={(e) => setValue(e.target.value)}
            />

            <button type='submit' className='todo-btn'>
            Add Task
            </button>

        </form>
    )
}