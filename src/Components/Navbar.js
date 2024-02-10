import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import logo from "../Images/logo.png"
import React from 'react';
import userLogo from "../Images/user.png"
import "./Components.css"
import { useSelector, useDispatch } from "react-redux";
import { changeLang } from "../Store/Actions/LangAction";
import { ThemeAction } from "../Store/Actions/ThemeAction";
import { searchMovie } from "../Store/Actions/SearchAction";
import { useEffect, useState } from 'react';

function Navbar() {

    //^ import functions
    const history = useHistory();
    const dispatch = useDispatch()

    //& get  and set data for language
    const language = useSelector((state) => state.combineLang.lang)

    const changeCurrentLang = () => {
        // to change in state in store => useDispatch
        dispatch(changeLang(language === "ENG" ? "ARB" : "ENG"))
    }

    //& get  and set data for theme
    const myTheme = useSelector((state) => state.combineTheme.theme)
    const changeCurrentTheme = () => {
        dispatch(ThemeAction(myTheme === "Light" ? "Dark" : "Light"))
    }

    //& get  and set data for favorites
    //const favoritesCount = useSelector((state) => state.combineFavorite.favorites.length);

    const counter = useSelector((state) => state.combineFavorite.counter);

    const favorites = useSelector(state => state.combineFavorite.favorites);

    useEffect(() => {
        dispatch({ type: "COUNTER", payload: favorites.length });
    }, [favorites.length, language]);


    //& get  and set data for search
    const myWord = useSelector((state) => state.combineSearch.search)

    const searchAboutMovie = (e) => {
        console.log(e.target.value);
        dispatch(searchMovie(myWord === "" ? e.target.value : e.target.value))
    }

    const handelChangeLang = (e) => {
        dispatch({
            type: "CHANGE_LANG",
            payload: e.target.value
        })
        console.log(e.target.value);
    }


    return (

        <>
            <div className="navbar">
                {/* <span>Favorites: {favoritesCount}</span> */}
            </div>

            <nav className="navbar navbar-expand-sm sticky-top" style={{ "backgroundColor": "rgb(60, 60, 60)" }}>

                {/* <!-- secondary menu --> */}
                <div className=" rounded-circle p-1 bg-secondary d-flex align-items-center justify-content-center mx-2 "
                    style={{ "width": "38px", "height": "38px" }} type="button"
                    id="secondMenu" data-bs-toggle="dropdown"
                    aria-expanded="false" data-bs-auto-close="outside">
                    <i className="bi bi-caret-down-fill "></i>
                </div>
                {/* <!-- secondary menu dd --> */}

                <ul className="dropdown-menu border-0 shadow p-2" aria-labelledby="secondMenu"
                    style={{ "width": "12em" }}>
                    {/* <!-- avatar --> */}
                    <li className="dropdown-item p-1 rounded d-flex" type="button" onClick={() => history.push("/")} >
                        <img src={userLogo} alt="avatar" className="rounded-circle me-2"
                            style={{ "width": "45px", " height": "45px", "object-fit": "cover" }} />
                        <div>
                            <p className="m-0">User</p>
                            <p className="m-0 text-muted">See your profile</p>
                        </div>
                    </li>

                    {/* <!-- Theme Mood --> */}
                    <li className="dropdown-item p-1 my-1 rounded d-flex" type="button" onClick={() => changeCurrentTheme()}>
                        <i className="bi bi-brilliance bg-gray p-2 fs-5" style={{ "width": "45px", " height": "45px" }} ></i>
                        <div>
                            <p className="m-0">Your Theme</p>
                            <p className="m-0 text-muted text-center">{myTheme}</p>
                        </div>
                    </li>

                    {/* <!-- Log Out --> */}
                    <li className="dropdown-item p-1 my-1 rounded" type="button">
                        <span onClick={() => history.push("/login")} className="d-flex text-decoration-none text-dark">
                            <i className="bi bi-gear-fill bg-gray p-2 rounded-circle fs-5"></i>
                            <div className="ms-3 d-flex justify-content-between align-items-center w-100 ">
                                <p className="m-0">Log Out</p>
                            </div>
                        </span>
                    </li>
                </ul>

                <Link className="navbar-brand ps-3" to="/"> <img src={logo} style={{ "width": "45px" }} alt="...." /> </Link>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active hoverable" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/favorits">
                                    Favorites:  <span className="badge bg-secondary">{counter}</span> </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn-outline-primary" to="/aboutus">About Us</Link>
                            </li>
                        </ul>

                        <div className="btn-group pe-3">
                            <li className='nav-item nav-item ps-sm-5 btn border-0'>
                                <select className="form-select btn btn-outline-success  " aria-label="Default select example" value={language} onChange={(e) => handelChangeLang(e)} >
                                    <option value="en" >English</option>
                                    <option value="ar">Arabic</option>
                                    <option value="fr">French</option>
                                </select>
                            </li>
                        </div>

                        {/* search Word */}
                        <form className="d-flex">

                            <input className="form-control mx-2 bg-secondary" onChange={searchAboutMovie}
                             type="text" placeholder="Search" aria-label="Search" style={{ "width": "180px" }}></input>

                            <button type="button" className="btn btn-sm btn-outline-primary "
                                aria-expanded="false" onClick={() => history.push("/search")}  > Search</button>
                        </form>

                    </div>
                </div>
            </nav>

        </>

    )

}

export default Navbar;