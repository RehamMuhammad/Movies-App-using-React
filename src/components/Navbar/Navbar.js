import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {
  const favoriteList = useSelector(state => state.favorite.favoriteList);

  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-dark bg-lightdark text-light">
  <div class="container-fluid">
    <Link class="navbar-brand text-warning" to="/">Movies</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to="/favorites" class="nav-link" aria-current="page">Favorite Movies     <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-heart-fill text-warning ms-1 "
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg> {favoriteList.length}</Link>
        </li>
        <li class="nav-item ms-2">
          <Link to="/login" class="nav-link">Login</Link>
        </li>
        <li class="nav-item">
          <Link to="/register" class="nav-link">Register</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  );
}

export default Navbar;