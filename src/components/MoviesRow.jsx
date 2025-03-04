import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { apiKey } from "../constants";
import axios from "axios";

const MoviesRow = ({ title, category }) => {
    const [movies, setMovies] = useState(null);
    const getMovies = async () => {
        const endPoint = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}&language=en-US&page=1`;
        try {
            const res = await axios.get(endPoint);
            setMovies(res.data?.results);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className="moviesRow">
            <h1 className="moviesRow-title">{title}</h1>
            <div className="moviesRow-movies">
                {movies &&
                    movies.map((movie) => {
                        return <MovieCard key={movie.id} {...movie} />;
                    })}
            </div>
        </div>
    );
};

export default MoviesRow;
