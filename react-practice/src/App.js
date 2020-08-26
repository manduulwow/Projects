import React from 'react';
import './App.css';
import MainItems from './components/mainItems';
import CDKMain from './components/CDK/main'; 
import Weather from './components/weather/main';
import TaskPlanner from './components/TaskPlanner/main';
import HOC from './components/HOC/main';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.items = Object.entries(this.props.data);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    return (
      <div className="App">
        <div className="header-container">
          <h1>Hello</h1>
        </div>
       <div className="container">
          <Switch>
            <Route exact path="/" component={() => <MainItems items={this.items} />} />
            <Route path="/CDK" component={CDKMain} />
            <Route path="/Weather" component={Weather} />
            <Route path="/TaskPlanner" component={TaskPlanner} />
            <Route path="/HOC" component={HOC} />
          </Switch>
       </div>
      </div>
    )
  }
}

export default App;
