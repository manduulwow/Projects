import React, { Fragment } from 'react';
import './historyIdList.css';

const HistoryIdList = (props) => {
    return (
        <Fragment>
            {
                props.ids.map((o, key) => (
                    <div key={key} onClick={props.handleClick} className="hist-id">{o.id}</div>)
                )
            }
        </Fragment>
    )
}

export default HistoryIdList;