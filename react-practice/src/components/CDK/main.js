import React from 'react';
import historyIds from './historyId.json';
import historyList from './historyData.json';

import HistoryIdList from './components/historyIdList'; 
import HistoryList from './components/historyList';
import './main.css';

class CDKMain extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            historyList : [],
            historyId: null
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let history = historyList.find((history) => (history.id === e.target.innerText));
        this.setState({ 
            historyList : Object.entries(history.history),
            historyId: history.id
        });
    }

    render() {
        return (
            <div className="cdkmain-container">
                <div className="cdk-box">
                    <HistoryIdList ids={historyIds} handleClick={this.handleClick}/>
                </div>
                <div className="cdk-box">
                    <HistoryList historyList={this.state.historyList} historyId={this.state.historyId}/>
                </div>
            </div>
        )
    }
}

export default CDKMain;