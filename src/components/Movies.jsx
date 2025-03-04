import MoviesRow from "../components/MoviesRow";

const details = [
    { id: 1, title: "Now playing", category: "now_playing" },
    { id: 2, title: "Popular", category: "popular" },
    { id: 3, title: "Top Rated", category: "top_rated" },
    { id: 4, title: "Upcoming", category: "upcoming" },
];

const Movies = () => {
    return (
        <section className="movies-section">
            {details.map((movieDetails) => {
                return <MoviesRow key={movieDetails.id} {...movieDetails} />;
            })}
        </section>
    );
};

export default Movies;
