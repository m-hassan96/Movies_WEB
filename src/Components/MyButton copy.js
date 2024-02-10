
import React from "react";


class MyButton extends React.Component {

    constructor(props) {
        console.log(props)
        super()
    }

    render() {

        return (
            <button className={`btn text-white border-2 border-white ${this.props.btnclass}`}>{this.props.btnname}
            </button>
        )
    }

}

export default MyButton;