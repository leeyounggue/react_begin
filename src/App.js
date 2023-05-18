import Button from "./Button";
import styles from "./App.module.css";
import classNames from 'classnames';

const cn = classNames.bind(styles);

function App() {
  return (
    <div>
        <h1 className={cn('title')}>Coder Change</h1>
        <Button text={"Continue"} />
    </div>
  );
}

export default App;