import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect, memo } from "react";

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev) => prev + 1);
    const onChange = (e) => {
        setKeyword(e.target.value);
    }
    useEffect(() => {
        getConsoleLog("키워드 변경");
    }, [keyword]);
    useEffect(() => {
        getConsoleLog("카운터변경");
    }, [counter]);
    useEffect(() => {
        getConsoleLog("전체 변경");
    }, [keyword, counter]);

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

const MemoizedApp = memo(App);

function getConsoleLog(msg) {
    console.log(msg);
}

export default MemoizedApp;