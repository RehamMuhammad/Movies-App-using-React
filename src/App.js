import Movies from "./pages/movies/movies";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import MoviesDetails from "./pages/moviesDetails/moviesDetails";
import Favorite from "./pages/favorite/favorite";
import { LanguageProvider } from "./context/LanguageContext";
import { useState } from "react";
import NotFound from "./pages/NotFound";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={lang === "ar" ? "text-right" : "text-left"}
    >
      <LanguageProvider value={{ lang, setLang }}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/details/:id" component={MoviesDetails} />
            <Route exact path="/favorites" component={Favorite} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </LanguageProvider>
    </div>
  );
}

export default App;
