import React from 'react';
import './Info.css'

const Info = (props) => {
    const {title} = props.selected;
    // console.log(props.serial)
    return (
        <div>
            <ul>
                <li className="bg-primary text-light rounded p-2" >{title}</li>
            </ul>
        </div>
    );
};

export default Info;