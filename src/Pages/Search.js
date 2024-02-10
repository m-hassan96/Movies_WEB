import axios from "axios"
import { useEffect, useState } from "react"
import MyCard from "../Components/MyCard"
import { useSelector, useDispatch } from "react-redux";
import "./Pages.css"

export default function Search() {

    const [Movies, setMovie] = useState([])

    const myWord = useSelector((state) => state.combineSearch.search)

    console.log(myWord);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6883a4d02a15e877d54e507dbc703331&query=${myWord}`)
            .then((res) => setMovie(res.data.results))
            .catch((err) => console.log(err))
    }, [myWord])


    return (

        <div id="search">

            <h1 className="text-warning text-center p-4">Your search about your word  "{myWord}" </h1>
            <div className='col-12 justify-content-center movie-list'>
                {
                    Movies.map((movie, index) => {
                        return (
                            <div key={movie.id} >
                                <MyCard key={movie.id}
                                    image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    title={movie.title.substr(0, 14) + "..."}
                                    path={`MoviesDetelis/${movie.id}`}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}