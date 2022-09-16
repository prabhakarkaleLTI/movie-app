import React, { useState, useEffect } from "react";
import MovieBox from "../MovieBox";

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=ffca6aace522736d196e40720be42f4d";
export default function WhatsPoppular() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results);
      })
    },[]);

  return (
    <div className="container whats-poppular">
      <div className="heading">
        <span className="h4">What's Poppular</span>
        <div className="tabs">
          <button><span>Streaming</span></button>
          <button><span>On TV</span></button>
          <button><span>For Rent</span></button>
          <button><span>In Theaters</span></button>
        </div>
      </div>
      <ul className="list-group list-group-horizontal  scrollmenu">
        
        {
        movies.map((movie) => {
          return(
            <li className="list-group-item border border-light 1" key={movie.id}>
            <MovieBox {...movie}/>
            </li>
          )
        })
      }
      </ul>
    </div>
  );
}
