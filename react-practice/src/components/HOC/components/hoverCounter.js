import React from 'react';
import UpdatedComponent from './updateComponent';

class HoverCounter extends React.Component {
    render() {
        return (
            <div className="hc-container">
                <div className="header" onMouseEnter={this.props.increment}>
                    <h1>Header {this.props.count}</h1>
                </div>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter);