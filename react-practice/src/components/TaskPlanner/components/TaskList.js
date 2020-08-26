import React from 'react';
import './TaskList.css';


const TaskList = (props) => {
    const onChange = (e) => {
        props.onDone(e.target.getAttribute('val'));
    }

    return (
        <div className="tl-container">
            <div><h2>ToDo</h2></div>
            <div>
                {
                    props.todoList.filter((item) => !item.state).map((item,key) => (
                        <div className="list-item" key={key}>
                            <div><input type="checkbox" onChange={onChange} val={item.item}/></div>
                            <div style={{position:"relative", bottom:2, marginLeft:5}}>{item.item}</div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default TaskList;