import React from "react";
import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.array,
};

export default Movie;
