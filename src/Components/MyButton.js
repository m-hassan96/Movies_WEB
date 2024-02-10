function MyButton(props) {


    return (
        <>

            <button disabled={props.disabledProps} className={`btn  btn-lg  ${props.btnclassName}`}
            type={props.typeProps}
            > {props.btnNameProps}

            </button>
        </>

    )
}

export default MyButton;

