import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id, ...rest } = useParams();
    const detailAPiUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;

    console.log(detailAPiUrl);

    return <h1>Detail Page</h1>;
}

export default Detail;
