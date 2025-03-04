import React from "react";

const imgBaseUrl = "https://image.tmdb.org/t/p/original";
const MovieCard = ({ poster_path }) => {
    return (
        <div className="movieCard">
            <img src={`${imgBaseUrl}/${[poster_path]}`} alt="" />
        </div>
    );
};

export default MovieCard;
