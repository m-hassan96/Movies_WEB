// Import React library
import React from "react";
import { Link } from 'react-router-dom';
import "../Pages/Home/MyCSS.css"
//import { addToFavorites, removeFromFavorites } from "../Store/Actions/FavoritesAction";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react"

function MyCard(props) {

    const dispatch = useDispatch();

    const [Heart, setSolidHeart] = useState("bi-heart");

    //movies from reducer
    const movieList = useSelector(state => state.combineFavorite.favorites);
   
    const handelAddMovie = (mov) => {

        if (movieList.some((movie) => movie.id === mov.id)) {
            dispatch({ type: "REMOVE_FROM_FAVORITES", payload: mov });

        } else {
            dispatch({ type: "ADD_TO_FAVORITES", payload: mov });
            //setSolidHeart("bi-heart-fill");
        }
    };


    return (

        <div className={`card bg-muted rounded movie-card `} >
            {/* Display the movie poster */}

            <div className="border-0  shadow ">

                <Link to={props.path} className="text-decoration-none">
                    < img src={props.image} className="card-img-top" alt="..." />
                </Link>
                <ul className="border-0  m-0 p-1">

                    <li className="p-1 my-1 rounded text-decoration-none" type="button">

                        <Link to={props.path} className="text-decoration-none text-black float-start">
                            <p>{props.title}</p>
                        </Link>
                        <div className="float-end">
                            <i className={`bi fs-3 ${props.isFavorite? "bi-heart-fill" : "bi-heart"}`}
                                onClick={() => handelAddMovie(props.movie)}
                                type="button"
                                style={{ "color": "gray" }} />
                        </div>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MyCard;

