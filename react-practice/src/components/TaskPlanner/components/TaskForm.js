import React, { useState } from 'react';


const TaskFrom = (props) => {
    const [todo, setTodo] = useState('');
    const onChange = (e) => {
        setTodo(e.target.value);
    }
    const onKeyDown = (e) => {
        if(e.key === 'Enter') {
            props.addToList(todo);
            setTodo('')
        }
    }
    const onAdd = () => {
        if(todo.length > 0) {
            props.addToList(todo);
            setTodo('');
        }
    }

    return (
        <div className="form-container">
            <div><h2>Add Item to List</h2></div>
            <div>
                <span>To do : </span><input type="text" onChange={onChange} onKeyDown={onKeyDown} value={todo}></input>
            </div>
            <div style={{marginTop: 20}}>
                <button onClick={onAdd}>Add</button>
            </div>
        </div>
    )
}

export default TaskFrom;