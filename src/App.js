import React, { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        // https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year"
            )
        ).json();

        setMovies(json.data.movies);
        setLoading(false);

        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year")
            .then( (resoponse) => resoponse.json() )
            .then( (data) => {
                setMovies(data.data.movies);
                setLoading(false);
            } );

    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            {loading ? (
                <h1>Loading... </h1>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <img
                                src={movie.medium_cover_image}
                                alt={movie.title}
                            />
                            <h2>{movie.title}</h2>
                            <p>{movie.summary}</p>
                            <ul>
                                {movie.genres.map((g) => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
