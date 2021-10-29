import { Link } from "react-router-dom";


function Navbar() {
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
          <Link to="/favorites" class="nav-link" aria-current="page">Favorites</Link>
        </li>
        <li class="nav-item">
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