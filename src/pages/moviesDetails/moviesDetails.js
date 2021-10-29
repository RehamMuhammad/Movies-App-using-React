import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function MoviesDetails() {
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=af53ae21cd2447d1b570ba45cd7c2e45`
      )
      .then((res) => setMovieDetails(res.data))
      .catch((e) => console.log(e));
    console.log(movieDetails);
  }, []);

  return (
    <div className="container text-light mt-5">
      <div className="row">
        <div className="col-6 text-center">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            className="img-fluid col-md-10"
            alt="movie poster"
          />
          </div>
         <div className="col-6">
         <h3 className="card-title text-warning mt-2">
            {movieDetails.original_title}
          </h3>
          <h5 className="card-text text-light mb-5 mt-5">
           No. of Votes: &nbsp;{movieDetails.vote_count} 
          </h5>
              <h3 className="text-warning mt-5 mb-3">Movie Overview</h3>
            <p> {movieDetails.overview}</p>
              {console.log(movieDetails)}
              </div>
      </div>
    </div>
  );
}

export default MoviesDetails;
