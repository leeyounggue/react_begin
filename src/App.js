import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setConins] = useState([]);
    const [myMoney, myMoneySet] = useState(0);

    const onChange = myMoneySet((e) => e.target.value);

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
        <input type="text" value={myMoney} onChange={onChange} />
    </div>
    );
}

export default App;