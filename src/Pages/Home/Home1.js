import MyTitle from "../../Components/MyTitle";
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import MyCard from "../../Components/MyCard"
import "./MyCSS.css"
import MyCarousel from "../Carousel/Carousel"
import MyFooter from "../Footer/Footer";
import Mycarousel1 from "../Carousel/Carousel1";
import MyPagination from "../../Components/Pagination";


function Home() {

    const [Movies, setMovie] = useState([])

    useEffect(() => {

        //  axios.METHOD

        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6883a4d02a15e877d54e507dbc703331&page=3")
            .then((res) => setMovie(res.data.results))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <div className='container '>


                <MyCarousel />

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
            <MyPagination />
        </>
    )
}

export default Home;

