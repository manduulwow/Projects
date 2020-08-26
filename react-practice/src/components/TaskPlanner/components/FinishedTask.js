import React from 'react';
import './TaskList.css';

const FinishedTask = (props) => {
    console.log(props.todoList);
    return (
        <div>
            {
                props.todoList.filter((item) => item.state).map((item, key) => (
                    <div className="list-item" key={key}>
                        <div style={{ position: "relative", bottom: 2, marginLeft: 5 }}>{item.item}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default FinishedTask;