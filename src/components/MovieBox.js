import React, { useState } from "react";
import { Modal } from "bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500";
export default function MovieBox({
  id,
  title,
  poster_path,
  overview,
  release_date,
  vote_average,
}) {
  const [posterPath, setPosterPath] = useState(API_IMG + poster_path);
  console.log(posterPath);
  const rel_date = new Date(release_date);
  const mydate = `${rel_date.toLocaleString("default", {
    month: "long",
  })} ${rel_date.getDate()}, ${rel_date.getFullYear()}`;
  return (
    <div>
      <div className="container mt-3 pb-5">
        <div
          className="card" 
          style={{ width: "150px", overflow: "hidden", border: "none" }}
        >
          <img
            className="card-img-top"
            src={API_IMG + poster_path}  
            alt="Card image"
            style={{ width: "100%" }}
          />
          <div className="card-body" style={{ paddingLeft: "0" }}>
            <p className="card-title">{title}</p>
            <p className="card-text">{mydate}</p>
            <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            >Show More...</button>

            {/* Modal */}

            <div
              className="modal fade"
              id="exampleModal"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content p-3">
                  <div className="modal-header"> 
                    <h5 className="modal-title" id="exampleModalLabel">   
                      {title}
                      <p>{posterPath}</p>
                    </h5>   
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img
                      src={posterPath}
                      alt=""
                      className="card-img-top"
                    />
                    <div className="Movie Info mt-3">
                      <h4>ImDb : {vote_average}</h4>
                      <h5>Release Date : {release_date}</h5>
                      <br />
                      <h6>overview</h6>
                      <p>{overview}</p>
                    </div>
                  </div>
                  <div className="modal-footer">...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}