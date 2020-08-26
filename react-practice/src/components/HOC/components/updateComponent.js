import React from 'react';

const UpdatedComponent = (OriginalComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state ={
                count: 0
            }
            this.increment = this.increment.bind(this);
        }

        increment() {
            this.setState((prevState) => {
                return { count: prevState.count + 1 };
            });
        }

        render() {
            return <OriginalComponent name={"Mandy"} increment={this.increment} count={this.state.count}/>
        }
    }
}

export default UpdatedComponent;