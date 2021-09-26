import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import './Cards.css'
import ReactStars from "react-rating-stars-component";

const icon = <FontAwesomeIcon className="me-1" icon={faPlusSquare}></FontAwesomeIcon>;
const Cards = (props) => {
    // console.log(props)
    const {serial} = props;
    const {poster, title, directors, seasons, firstReleasedYear, genre, rating} = serial;
    return (
        <div className="card-style">
            <img className="poster" src={poster} alt="" />
            <h3 className="text-danger my-1">{title}</h3>
            <p className="fw-bold">Created By: {directors}</p>
            <p>Seasons: {seasons}</p>
            <p>First Released: {firstReleasedYear}</p>
            <ul className="genre-list">Genre: {genre.map(item => <li>{item}</li>)}</ul>
            <div style={{width: "30%", margin: "auto"}}>
            Rating: <ReactStars
                        count={5}
                        value={rating/2}
                        size={24}
                        edit={false}
                        activeColor="orangeRed"
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}>
                        </ReactStars>
            
            </div>
            <button  onClick={()=>props.showInfo(serial)} className="btn btn-success mb-2">{icon}Add to watchlist</button>
        </div>
    );
};

export default Cards;