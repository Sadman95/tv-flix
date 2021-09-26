import React from 'react';
import './Info.css'

const Info = (props) => {
    const {title, seasons} = props.selected;
    return (
        <div>
            <ul className="watch-list p-0 ms-2">
                <li className="bg-primary text-light rounded p-1" >{title}({seasons})</li>
            </ul>
        </div>
    );
};

export default Info;