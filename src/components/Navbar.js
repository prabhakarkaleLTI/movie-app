import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <img
          className="navbar-brand"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt=""
          width="150px"
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"   
          aria-controls="navbarText"
          aria-expanded="false" 
          aria-label="Toggle navigation"
        > 
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 active">
            <li className="nav-item dropdown">
              <span
                className="nav-link active dropbtn"
                aria-current="page"
              >
                Movies
                <div className="dropdown-content">
                  <a href="#">Poppular</a>
                  <a href="#">Now Playing</a>
                  <a href="#">Upcomming</a>
                  <a href="#">Rop Rated</a>
                </div>
              </span>
            </li>   
            <li className="nav-item dropdown">
              <span
                className="nav-link active dropbtn"
                aria-current="page"
              >
                TV Shows
                <div className="dropdown-content">
                  <a href="#">Poppular</a>
                  <a href="#">Airing Today</a>
                  <a href="#">On TV</a>
                  <a href="#">Top Rated</a>
                </div>
              </span>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link active dropbtn"
                aria-current="page"
              >
                People
                <div className="dropdown-content">
                  <a href="#">Poppular People</a>
                </div>
              </span>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link active dropbtn"
                aria-current="page"
              >
                More
                <div className="dropdown-content">
                  <a href="#">Discussiona</a>
                  <a href="#">Leaderboard</a>
                  <a href="#">Support</a>
                  <a href="#">API</a>
                </div>
              </span>
            </li>
          </ul>

          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="nav-item">
              <i className="bi bi-plus-lg nav-link active navbar-icons"></i>
            </li>
            <li className="nav-item">
              <span className="nav-link active">EN</span>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="bi bi-bell-fill"></i>
              </a>
            </li>
            <li className="nav-item">
              <span
                className="nav-link active"
                style={{
                  border: "1px solid ",
                  borderRadius: "50%",
                  width: "30px",
                }}
              >
                K
              </span>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
