import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../network/axiosConfig.js";
import { useHistory, useParams, useLocation } from "react-router";

function Movies() {
  const[counter, setCounter] = useState(1);
  const[searchMovie, setSearchMovie] = useState("")
  const [movies, setMovies] = useState([]);
  // const history = useHistory();
  // const location = useLocation();
  // console.log(location.pathname);
  // console.log(history);
  // const params = useParams();
  // console.log(params);

  useEffect(() => {
    axiosInstance
      .get("/")
      .then((res) => setMovies(res.data.results))
      .catch((e) => console.log(e));
    console.log(movies);
  }, []);


  useEffect(() => {
    axios
     .get(`https://api.themoviedb.org/3/movie/popular?api_key=af53ae21cd2447d1b570ba45cd7c2e45&page=${counter}`)
      .then((res) => setMovies(res.data.results))
      .catch((e) => console.log(e));
    console.log(movies);
  }, [counter]);

  
  useEffect(() => {
    axios
     .get(`https://api.themoviedb.org/3/search/movie?api_key=af53ae21cd2447d1b570ba45cd7c2e45&query=${searchMovie}`)
      .then((res) => setMovies(res.data.results))
      .catch((e) => console.log(e));
    console.log(movies);
  }, [searchMovie]);



  return (
    <div>
      <div className="container-fluid bg-dark mb-5">
        <div className="row p-5" style={{}}>
        <div class="input-group mb-3 bg-dark text-light">
  <span class="input-group-text bg-dark text-light" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></span>
  <input type="text" class="form-control" placeholder="Search Movie" aria-label="Username" aria-describedby="basic-addon1"
  onChange={(e) => setSearchMovie(e.target.value)}/>
</div>
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="col-md-2 col-4 p-1">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="img-fluid col-md-10"
                  alt="movie poster"
                />
                <h3 className="card-title text-light mt-2">
                  {movie.original_title}
                </h3>
                <p className="card-text text-warning">
                  Votes: {movie.vote_count} vote
                </p>
                <Link
                  to={`details/${movie.id}`}
                  className="btn btn-dark text-warning border border-1 border-warning mb-2"
                >
                  Know more
                </Link>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart text-warning ms-5"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>
            );
          })}
        </div>
        <div className="row ">
          <div className="col-5"></div>
          <div className="col-1 mb-5">
            <button
           
              onClick={() => {setCounter(counter-1)}}
              
              className="btn btn-success"
            >
              Previous
            </button>
          </div>
          <div className="col-1 mb-5">
            <button className="btn btn-success" onClick={() => setCounter(counter+1)}>Next</button>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
