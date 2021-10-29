import Movies from './pages/movies/movies'
import './index.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';
import MoviesDetails from './pages/moviesDetails/moviesDetails';
import Favorite from './pages/favorite/favorite';


function App() {
  return (
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
  );
}

export default App;
