import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Components/Navbar';
import Favorites from './Pages/Home/Favorits';
import Movie from './Pages/Home/Movie.js';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import MyFooter from './Pages/Footer/Footer';
import AboutUs from './Pages/AboutUs';
import Search from './Pages/Search';
import Test from './test'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { LanguageContext } from '../src/context/language';
import {  ThemeContext } from '../src/context/theme';

function App() {

  // const lang = useSelector((state) => state.combineLang.lang)

  // ltr --> left to right
  // rtl --> right to left
  const theme = useSelector((state) => state.combineTheme.theme)

  const [contextLang, setContextLang] = useState("en")
  const [contextTheme, setContextTheme] = useState("Dark")

  return (
    <div dir={contextLang === "ar" ? "rtl" : "ltr"}

      className={contextTheme === "Light" ? "bg-light" : "bg-dark"} >
      <LanguageContext.Provider value={{ contextLang, setContextLang }}>
      <ThemeContext.Provider value={{ contextTheme, setContextTheme }}>

        <BrowserRouter>

          <Navbar />
          <Switch>

            <Route exact path={"/"} component={Home} />
            <Route exact path={"/favorits"} component={Favorites} />
            <Route exact path={"/MoviesDetelis/:id"} component={Movie} />
            <Route exact path={"/aboutus"} component={AboutUs} />
            <Route exact path={"/search"} component={Search} />
            <Route exact path={"/test"} component={Test} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/signUp"} component={SignUp} />

            <Route path={"*"} component={NotFound} />
          </Switch>

          <MyFooter />
        </BrowserRouter>
      </ThemeContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
