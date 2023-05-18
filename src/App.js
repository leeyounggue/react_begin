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
            coins.map((coin, index) => {

                console.log(coin);

                <li key={index}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</li>
            })
            }
        </ul>
    </div>
    );
}

export default App;