import PropTypes from "prop-types";
import styles from "./Button.module.css";


function Button( {text, onClicker} ) {
    return (
        <button className={styles.btn} onClick={onClicker} >
            {text}
        </button>
    )
}

Button.prototype = {
    text: PropTypes.string.isRequired
}
export default Button;