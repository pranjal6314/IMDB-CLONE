import React, { useEffect, useState } from "react";
import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    setLoading(true);
    fetch(`http://localhost:3002/${type ? type : "popular"}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
        setLoading(false);
      });
  };

  return (
    <div className="movie__list">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div>
          <h2 className="list__title">
            {(type ? type : "POPULAR").toUpperCase()}
          </h2>
          <div className="list__cards">
            {movieList.map((movie) => (
              <Cards movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
