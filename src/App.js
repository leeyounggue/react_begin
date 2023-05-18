import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (e) => {
        setKeyword(e.target.value);
    }

    console.log('tt');
    useEffect(() => {
        console.log("tester");
    }, []);
    useEffect(() => {
        if (keyword !== "") {
            console.log("Search For", keyword);
        }
    }, [keyword]);

    useEffect(() => {
        console.log(counter);
    }, [counter]);


    return (
    <div>
        <input
            onChange={onChange}
            type="text"
            placeholder="Search Keyword Here..."
            value={keyword}
        />
        <h1 className={styles.title}>Coder Change</h1>
        <span>{counter}</span>
        <Button text={"Continue"} onClicker={onClick} />
    </div>
    );
}

export default App;