import { useState } from "react";
import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";
import MyTitle from "../../Components/MyTitle";
import "./AddUser.css"
function AddUser(props){

    // console.log(props) 
    // hooks 
    // const location = useLocation();
    // console.log(location)
    // const match = useRouteMatch()
    // console.log(match)
    const history = useHistory();
    console.log(history)
    // const params = useParams()
    // console.log(params);

    const [userData, setUserData] = useState({
        name: "",
        position: ""
    })

    //  this field is required 
    // please enter a valid name

    const [erros, setErrors] = useState({
        nameError: "",
        positionError: ""
    })

    const chageUserData = (e) => {
        console.log(e.target.value)
        if(e.target.name == "name"){
            setUserData({
                ...userData,
                name: e.target.value
            })
            setErrors({
                ...erros, 
                nameError: e.target.value.length == 0 ? "This Field Is Required" : e.target.value.length < 3 && "please enter a valid name" 
            })
        }else{
            setUserData({
                ...userData,
                position: e.target.value
            })
            setErrors({
                ...erros, 
                positionError : e.target.value.length == 0 && "This Field Is Required"
            })
        }
    }

    const submitData = (e) => {
        if(!erros.nameError || !erros.positionError){
            e.preventDefault()
            // props.history.push("/") --> Class com or Function  Component
            history.push("/") // if u use fun com ONLY
        }

    }


    return(
        <div className="container"> 
            <MyTitle  title="Add User" newClass="text-primary"/>
        <form onSubmit={(e) => submitData(e)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" 
                className={`form-control ${erros.nameError && "border-danger"}`}
                value={userData.name}
                onChange={(e) => chageUserData(e)}
                name = "name"
                />
                <p className="text-danger"> {erros.nameError}  </p> 
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Position</label>
                <input type="text" 
                className={`form-control ${erros.positionError ? "border-danger" : "border-success"}`}
                value={userData.position}
                onChange={(e) => chageUserData(e)}
                name="position"/>
                <p className="text-danger"> {erros.positionError} </p>
            </div>
            
            <button 
            disabled = {erros.nameError || erros.positionError && "disabled"}
            type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    
    )


}

export default AddUser;