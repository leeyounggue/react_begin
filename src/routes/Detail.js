import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../Detail.module.css";

function Detail() {
    const { id, ...rest } = useParams();
    const detailAPiUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const [movieDetail, setDetail] = useState([]);
    const getDetaiiData = async () => {
        const json = await (await fetch(detailAPiUrl)).json();
        setDetail(json.data.movie);
    };

    useEffect(() => {
        getDetaiiData();
    }, []);

    console.log(movieDetail);

    return (
        <h1
            className={style.title}
            style={{
                backgroundImage: `url(${movieDetail.background_image})`,
            }}
        >
            {movieDetail.title}
            <ul>
                {movieDetail.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </h1>
    );
}

export default Detail;
