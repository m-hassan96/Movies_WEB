
function MyTitle(props) {
    return (
        <h1 style={{ "color": "white" }}
            className={`text-center  pt-3 ${props.newClass}`}> {props.title}  </h1>
    )
}

export default MyTitle;
