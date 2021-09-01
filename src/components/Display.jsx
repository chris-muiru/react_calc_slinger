import '../css/display.css';
const Display = (props) => {
    console.log(props.keyValue);
    return (  
        <div className="display">
            <p className="previous-calc">1000x1000</p>

            <p className="result-div">{props.keyValue}</p>
        </div>
    );
}

export default Display