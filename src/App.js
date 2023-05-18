import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [myMoney, myMoneySet] = useState(0);
    const [buyAmount, setAmount] = useState(0);

    const [selCoin, setSelCoin] = useState(0);


    const onChange = (e) => myMoneySet((currnet) => e.target.value);
    const onChange2 = (e) => setSelCoin( (current) => e.target.value);
    const onClick = () => {

        setAmount( (current) => Math.floor( selCoin / myMoney) );

    };

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    return (
    <div>
        <h1>bts Graph { loading ? "" : `(${coins.length})`} </h1>
        { loading ? <strong>Loading...</strong> :
            <select onChange={onChange2}>
                <option value="">선택필요</option>
                {
                    coins.map( (item, index) => {
                        return <option key={index} value={item.quotes.USD.price}>{item.name} ({item.symbol}) ${item.quotes.USD.price} USD</option>
                    } )
                }
            </select>
        }
        <div>{buyAmount}</div>
        <input type="text" value={myMoney} onChange={onChange} />
        <button onClick={onClick}>Calc</button>
    </div>
    );
}

export default App;