import React from 'react';
import TaskFrom from './components/TaskForm';
import TaskList from './components/TaskList';
import FinishedTask from './components/FinishedTask';
import './main.css';

class TaskPlanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        }
        this.addToList = this.addToList.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    addToList(item) {
        console.log(item);
        this.setState((state) => {
            state.todoList.push({item:item, state: false});
            return {
                todoList: state.todoList
            };
        });
    }

    onDone(val) {
        this.setState((state) => {
            let index = state.todoList.findIndex((item) => (item.item === val));
            state.todoList[index].state = true;
            return {
                todoList: state.todoList
            }
        })
    }

    render() {
        return (
            <div className="tb-container">
                <div className="box tf-box">
                    <TaskFrom addToList={this.addToList} />
                </div>
                <div className="box tl-box">
                    <TaskList todoList={this.state.todoList} onDone={this.onDone} />
                </div>
                <div className="box">
                    <FinishedTask todoList={this.state.todoList} />
                </div>
            </div>
        )
    }
}

export default TaskPlanner;