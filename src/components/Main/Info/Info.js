import React from 'react';
import './Info.css'

const Info = (props) => {
    const {title, seasons} = props.selected;
    // console.log(props.serial)
    return (
        <div>
            <ul className="watch-list">
                <li className="bg-primary text-light rounded p-1" >{title}({seasons})</li>
            </ul>
        </div>
    );
};

export default Info;