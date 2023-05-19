import React from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id, ...rest } = useParams();
    const detailAPiUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
    const [movieDetail, setDetail] = useState([]);
    const getDetaiiData = async () => {
        const json = await (await fetch(detailAPiUrl)).json();
        setDetail(json);
    };

    useEffect(() => {
        getDetaiiData;
    }, []);

    return <h1>Detail Page</h1>;
}

export default Detail;
