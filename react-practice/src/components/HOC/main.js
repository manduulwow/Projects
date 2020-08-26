import React from 'react';
import ClickCounter from './components/clickCounter';
import HoverCounter from './components/hoverCounter';
import './main.css';

class HOC extends React.Component{

    render() {
        return(
            <div className="HOC-container">
                <ClickCounter />
                <HoverCounter />
            </div>
        )
    }
}

export default HOC;