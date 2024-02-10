import React from "react";

function SmallText(props) {

    return (
        <>
            <p className={`${props.textclass}`}>{props.text}</p>
        </>
    )

}

export default SmallText;