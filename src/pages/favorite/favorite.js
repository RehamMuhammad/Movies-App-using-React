import { useEffect, useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {removeFavorites} from '../../redux/actions/movies'

function Favorite() {
  let favoriteList = useSelector((state) => state.favorite.favoriteList);
  const [favMovies, setFavMovies] = useState([])
  console.log(favoriteList);
  const dispatch = useDispatch();


  const removeMovie = (id,i) => {
  if  (favoriteList.find((favMovie) => favMovie.id === id) ) {
    favoriteList.splice(i,1)
  }
  setFavMovies([...favoriteList])
  dispatch(removeFavorites(favoriteList))

  }


  useEffect(() => {
    setFavMovies([...favoriteList])
  },[favoriteList])

  return (
    <div>
      <div className="container-fluid bg-dark mb-5">
        <div className="row p-5">
          <h1 className="text-warning mb-5">your Favorite Movies are here</h1>
          {favMovies.map((movie,i) => {
            return (
              <div key={movie.id} className="col-md-4 col-4 p-1">
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
                  className="bi bi-trash text-warning ms-5"
                  viewBox="0 0 16 16"
                  onClick={() =>  removeMovie(movie.id, i)}
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Favorite;
