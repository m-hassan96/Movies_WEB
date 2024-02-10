
function MyInput(props) {

    return (
        
            <input 
                type= {props.typeProps}
                className={`form-control mt-4 ${props.ClassNameProps}`}
                value={props.valueProps}
                onChange={props.onChangeProps}
                name={props.nameProps}  
                placeholder={props.placeholderProps} 
                checked={props.checkedProps} />
    )
}

export default MyInput;