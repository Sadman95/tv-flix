import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './Cards.css'

const icon = <FontAwesomeIcon className="me-1" icon={faPlusSquare}></FontAwesomeIcon>;
const Cards = (props) => {
    // console.log(props)
    const {serial} = props;
    const {poster, title, directors, seasons, firstReleasedYear, genre, rating} = serial;
    return (
        <div>
            <img className="poster" src={poster} alt="" />
            <h3>{title}</h3>
            <p>Created By: {directors}</p>
            <p>Seasons: {seasons}</p>
            <p>Firsr Released: {firstReleasedYear}</p>
            <ul className="genre-list">Genre: {genre.map(item => <li>{item}</li>)}</ul>
            <p>Rating: {rating}</p>
            <button  onClick={()=>props.showInfo(serial)} className="btn btn-success">{icon}Add to watchlist</button>
        </div>
    );
};

export default Cards;