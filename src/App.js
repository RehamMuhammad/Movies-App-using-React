import Movies from './pages/movies/movies'
import './index.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';
import MoviesDetails from './pages/moviesDetails/moviesDetails';
import Favorite from './pages/favorite/favorite';
import { LanguageProvider } from "./context/LanguageContext";
import { useState } from 'react';



function App() {
  const [lang, setLang] = useState('en');
  let language = "";

  return (
    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className={language === "ar" ? "text-right" : "text-left"}
    >
      <LanguageProvider value={{ lang , setLang}}>

    <Router>
       <Navbar/>
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/details/:id" component={MoviesDetails} />
        <Route exact path="/favorites" component={Favorite} />



    </Switch>
    </Router>
    </LanguageProvider>
    </div>
  );
}

export default App;
