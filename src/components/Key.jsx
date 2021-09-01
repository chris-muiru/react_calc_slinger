import '../css/key.css';

const  Key = ({ color, expand=false,keyValue,setValue,children,id}) => {
    // a state
    let style = { color };
    const handleClick=()=>{setValue(keyValue+children)};
    
    const classList = `calc-key ${ expand ? "expanded": ""}`;
    
    return ( 
            <button className={classList} style={style} id="btn-key" onClick={handleClick}>
                {children}
            </button>
           );
}
export default Key ;