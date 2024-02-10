import React from "react";

function MyPicture(props){
            return (
            <>            
                <img src={props.image} style={{"width": "80%"}}  className="p-2" alt="logo"/>    
            </>
            )

}

export default MyPicture;