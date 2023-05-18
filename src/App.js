import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setConins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setConins(json);
                setLoading(false);
            });
    }, []);

    return (
    <div>
        <h1>BTC Graph</h1>
        { loading ? <strong>Loading...</strong> : null }
        <ul>
            {
                coins.map( (item, index) => {

                    return <li key={index}>{item.name}</li>
                } )
            }
        </ul>
    </div>
    );
}

export default App;