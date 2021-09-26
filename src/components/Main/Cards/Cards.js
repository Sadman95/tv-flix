import React from 'react';
import './Cards.css'

const Cards = (props) => {
    // console.log(props)
    const {serial} = props;
    const {poster, title, directors, seasons, firstReleasedYear, genre} = serial;
    return (
        <div>
            <img className="poster" src={poster} alt="" />
            <h3>{title}</h3>
            <p>Created By: {directors}</p>
            <p>Seasons: {seasons}</p>
            <p>Firsr Released: {firstReleasedYear}</p>
            <ul className="genre-list">Genre: {genre.map(item => <li>{item}</li>)}</ul>
            <button onClick={()=>props.showInfo(serial)} className="btn btn-success">Add to watchlist</button>
        </div>
    );
};

export default Cards;