import { useState, useEffect } from "react";
import { apiKey } from "../constants";
import axios from "axios";
import { BsPlayFill } from "react-icons/bs";

const Header = () => {
    const [nowPlaying, setNowPlaying] = useState(null);
    console.log(nowPlaying?.title, nowPlaying);
    const imgBaseUrl = "https://image.tmdb.org/t/p/original";
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * (max + 1));
    };
    const getNowPlaying = async () => {
        try {
            const endPoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
            const res = await axios.get(endPoint);
            setNowPlaying(res.data.results[getRandomInt(20)]);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getNowPlaying();
    }, []);
    return (
        <section className="header-section" style={{ backgroundImage: nowPlaying && `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${imgBaseUrl}/${nowPlaying.backdrop_path})` }}>
            <div className="container">
                <div className="header-content">
                    <h1 className="header-title">{nowPlaying && nowPlaying.title}</h1>
                    <h1 className="header-overview">{nowPlaying && nowPlaying.overview}</h1>
                    <button className="header-btn">
                        <span>Play</span>
                        <BsPlayFill className="play-icon" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Header;
