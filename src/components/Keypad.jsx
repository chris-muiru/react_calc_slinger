import Key from './Key';
import '../css/keypad.css';
const Keypad  = ({keyValue,setValue,id,setId}) => {
    const calculations=(id)=>{
        
    };

    return ( 
        <div className="keypad">
                <Key color="#507d84" keyValue={keyValue} setValue={setValue}>C</Key> 
                <Key color="#507d84" keyValue={keyValue} setValue={setValue}>+/-</Key> 
                <Key color="#507d84" keyValue={keyValue} setValue={setValue}>%</Key> 
                <Key color="#ea736e" keyValue={keyValue} setValue={setValue}>&divide;</Key> 
                <Key color="black" keyValue={keyValue} setValue={setValue}>7</Key> 
                <Key color="black" keyValue={keyValue} setValue={setValue}>8</Key> 
                <Key color="black" keyValue={keyValue} setValue={setValue}>9</Key> 
                <Key color="#ea736e" keyValue={keyValue} setValue={setValue}>x</Key> 
                <Key color="black" keyValue={keyValue} setValue={setValue} >4</Key> 
                <Key color="black" keyValue={keyValue} setValue={setValue} >5</Key> 
                <Key color="black" keyValue={keyValue} setValue={setValue} >6</Key> 
                <Key color="#ea736e" keyValue={keyValue} setValue={setValue}>-</Key> 
                <Key color="black" keyValue={keyValue} setValue={setValue}>1</Key> 
                <Key color="black" keyValue={keyValue} setValue={setValue}>2</Key> 
                <Key color="black" keyValue={keyValue} setValue={setValue}>3</Key> 
                <Key color="#ea736e" keyValue={keyValue} setValue={setValue}  onclick={calculations()}>+</Key> 
                <Key color="black" expand={true} keyValue={keyValue} setValue={setValue}>0</Key> 
                <Key color="black" keyValue={keyValue} setValue={setValue}>.</Key> 
                <Key color="#ea736e" keyValue={keyValue} setValue={setValue}>=</Key> 
        </div>
     );
}
 
export default Keypad ;