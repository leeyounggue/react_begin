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
        <h1>bts Graph { loading ? "" : `(${coins.length})`} </h1>
        { loading ? <strong>Loading...</strong> :
            <select>
                {
                    coins.map( (item, index) => {
                        return <option key={index}>{item.name} ({item.symbol}) ${item.quotes.USD.price} USD</option>
                    } )
                }
            </select>
        }

    </div>
    );
}

export default App;