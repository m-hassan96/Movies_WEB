import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import MyCard from "../../Components/MyCard"
import "./MyCSS.css"
import MyCarousel from "../Carousel/Carousel"
import { LanguageContext } from "../../context/language.js";

function Home() {

    const [Movies, setMovie] = useState([])

    //const { contextLang } = useContext(LanguageContext);

    const language = useSelector((state) => state.combineLang.lang)
    const [page, setPage] = useState(1);

    const handelPages = (pageNum) => {
        setPage(pageNum);
    };

    const movieList = useSelector(state => state.combineFavorite.favorites);

    useEffect(() => {
        //  axios.METHOD
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6883a4d02a15e877d54e507dbc703331&page=${page}&language=${language}`)
            .then((res) => setMovie(res.data.results))
            .catch((err) => console.log(err))
    }, [page, language])


    return (
        <>
            <div className='container '>
                <MyCarousel />
                <div className='col-12 justify-content-center movie-list'>
                    {
                        Movies.map((movie, index) => {
                            return (
                                <div key={movie.id} >
                                    <MyCard
                                        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        title={movie.title.substr(0, 14) + "..."}
                                        path={`MoviesDetelis/${movie.id}`}
                                        movie={movie}
                                        isFavorite={movieList.some((thisMovie) => thisMovie.id === movie.id)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <ul className="pagination justify-content-center p-3">
                <div class="btn-group mr-2" role="group" aria-label="First group">
                    <button type="button" class="btn btn-secondary" onClick={() => handelPages(1)}>1</button>
                    <button type="button" class="btn btn-secondary" onClick={() => handelPages(2)}>2</button>
                    <button type="button" class="btn btn-secondary" onClick={() => handelPages(3)}>3</button>
                    <button type="button" class="btn btn-secondary" onClick={() => handelPages(4)}>4</button>
                </div>
            </ul>

        </>
    )
}

export default Home;

