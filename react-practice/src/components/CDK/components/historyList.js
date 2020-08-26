import React, { Fragment, useState } from 'react';
import './historyList.css';

const HistoryList = (props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }

    return (
        <Fragment>
            <div style={{ width: 100, marginLeft: 20 }}><h3>{(props.historyId) ? props.historyId : 'Empty'}</h3></div>
            <div className="historyItemList">
                {
                    (show) ?
                        props.historyList.map((history, key) => (
                            <Fragment key={key}>
                                <div>{history[0]}</div>
                                <div>{history[1]}</div>
                            </Fragment>
                        ))
                        :
                        props.historyList.slice(0, 2).map((history, key) => (
                            <Fragment key={key}>
                                <div>{history[0]}</div>
                                <div>{history[1]}</div>
                            </Fragment>
                        ))
                }
            </div>
            <div>
                {
                    (props.historyList.length > 2) ? <button onClick={handleShow}>{(show) ? 'Hide' : 'Show'}</button> : ''
                }
            </div>
        </Fragment>
    )
}

export default HistoryList;