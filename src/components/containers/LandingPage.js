import React from "react";

export default function LandingPage() {
  return (
    <div className="container landing-page">
      <div className="wrapper">
        <div className="d-flex flex-column justify-content-around h-100 p-5">
          <div className="title">
            <h1>Welcome</h1>
            <h2>
              Millions of moives, TV shows and people to discover. Explore Now.
            </h2>
          </div>
          <div className="input-group  mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a movie, tv show, person...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                Search
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
