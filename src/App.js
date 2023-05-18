import {useState, useEffect} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        // https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year
        const json = await (
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        ).json();

        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);

    return (
        <div>
            <h1>Movie List</h1>
            {
                loading ? <h1>Loading... </h1> : null
            }
        </div>
    );
}

export default App;