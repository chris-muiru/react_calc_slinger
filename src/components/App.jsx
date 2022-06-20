import React,{useState} from 'react';
import Display from './Display';
import Keypad from './Keypad';
import '../css/app.css';


const App = (props) => {
    const [keyValue, setValue] = useState('');
    const [answer,setAnswer]=useState(0);
    return ( 
        <div className="app">
            <Display keyValue={keyValue} setValue={setValue}/>
            <Keypad keyValue={keyValue} setValue={setValue} answer={answer} setAnswer={setAnswer}/>
        </div>
     );
}
 
export default App;
