import React from 'react';
import { Link } from 'react-router-dom';

const MainItems = (props) => {
    return (
        <div className="items-container">
            {
                props.items.map((item, key) =>
                    (
                        <div key={key} className="item-container">
                            <Link to={item[0]}>
                                <div className="item">{item[1]}</div>
                            </Link>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default MainItems;