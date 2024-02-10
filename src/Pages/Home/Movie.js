import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./MyCSS.css"


function Movie() {

    const movieId = useParams();

    const [movie, setMovie] = useState({});

    const language = useSelector((state) => state.combineLang.lang)
    const [page, setPage] = useState(1);

    const handelPages = (pageNum) => {
        setPage(pageNum);
    };


    const dispatch = useDispatch();
    const moviePosterUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=6883a4d02a15e877d54e507dbc703331&language=${language}`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err))
    }, [language])

    //movies from reducer
    const movieList = useSelector(state => state.combineFavorite.favorites);


    const handelAddMovie = (mov) => {

        if (movieList.some((movie) => movie.id === mov.id)) {
            dispatch({ type: "REMOVE_FROM_FAVORITES", payload: mov });
        } else {
            dispatch({ type: "ADD_TO_FAVORITES", payload: mov });

        }
    };

    return (
        <>

            {/* Head */}
            <h1 className="text-warning text-center p-4"> {movie.original_title}  </h1>
            <div id="head" className=" container w-75" style={{
                backgroundImage: `url( https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`
            }} >
            </div>

            <div className=" container py-5">
                <div className="row p-2">
                    <div id="shadow" className="col-4">
                        <img className="d-block rounded"
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            style={{ "width": "200px" }}
                        />
                    </div>

                    <div className="col-8">
                        <h2 className="text-warning text-center p-2"> {movie.original_title}  </h2>
                        <p className=" text-warning "
                            style={{ "fontSize": "13px" }}> {movie.overview}</p>

                        <i className="continueWatchIcon mr-1 icon-watch-icon fs-3 d-float" style={{ "color": "gray", "size": "2rem" }} />
                        <button className={"btn btn-success"}> Watch Now </button>
                        <button className={"btn btn-danger  ms-2"}> Download Now</button>

                        <i className={`bi fs-3 mx-3 ${movieList.some((thisMovie) => thisMovie.id === movie.id) ? "bi-heart-fill" : "bi-heart"}`}
                            onClick={() => handelAddMovie(movie)}
                            type="button"
                            style={{ "color": "gray" }} />

                        <h4 className="text-warning p-2" >Language :    <span className="text-white" >{movie.original_language} </span> </h4>
                        <h4 className="text-warning p-2" >Rate : <span className="text-white " >{movie.vote_average} </span> <i className="bi bi-star-fill"></i>
                            <span className="text-warning p-2" > Based on : </span>
                            <span className="text-white" >{movie.vote_count}</span></h4>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Movie;


