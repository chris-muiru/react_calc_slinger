import '../css/display.css';
import MiniDisplay from './MiniDisplay';
const Display = ({keyValue,setValue}) => {
    return (  
        <div className="display">
            <MiniDisplay className="previous-calc" keyValue={keyValue}></MiniDisplay>
            <p className="result-div">{keyValue}</p>
            
        </div>
    );
}

export default Display
