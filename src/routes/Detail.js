import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id, ...rest } = useParams();
    console.log(id);
    return <h1>Detail Page</h1>;
}

export default Detail;
