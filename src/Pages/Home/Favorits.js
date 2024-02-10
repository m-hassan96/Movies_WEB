
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MyCSS.css"
import { useSelector, useDispatch } from "react-redux";
import MyCard from "../../Components/MyCard"

function Favorites() {


    const dispatch = useDispatch();

    const [Heart, setSolidHeart] = useState("bi-heart ");

    const counter = useSelector((state) => state.combineFavorite.counter);

    const favorites = useSelector(state => state.combineFavorite.favorites);

    const handelAddMovie = (mov) => {
        if (favorites.some((movie) => movie.id === mov.id)) {
            dispatch({ type: "REMOVE_MOVIE", payload: mov });
            dispatch({ type: "counter", payload: counter });
        } else {
            dispatch({ type: "ADD_MOVIE", payload: mov });
            dispatch({ type: "counter", payload: counter });
        }
    };


    return (
        <>

            {/* Head */}
            <h1 className='text-warning  text-center pt-5 mb-3'>
                {counter > 0 ? `Your favorite movies are "${counter}"  on your list` : "Your favorite movies list are empty"}
            </h1>
            <div className='col-12 justify-content-center movie-list'>
                {
                    
                    favorites.map((movie, index) => {
                        return (
                            <div key={movie.id} >
                                <MyCard
                                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    title={movie.title.substr(0, 14) + "..."}
                                    path={`MoviesDetelis/${movie.id}`}
                                    movie={movie}
                                    isFavorite={favorites.some((thisMovie) => thisMovie.id === movie.id)}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div id="head" className=" container w-75">
            </div>

        </>
    )

}

export default Favorites;