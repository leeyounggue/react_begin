import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev) => prev + 1);
    console.log('tt');
    useEffect(() => {
        console.log("tester");
    }, []);

    return (
    <div>
        <h1 className={styles.title}>Coder Change</h1>
        <span>{counter}</span>
        <Button text={"Continue"} onClicker={onClick} />
    </div>
    );
}

export default App;