import { useState } from "react";
import MyTitle from "../../Components/MyTitle";
import MyInput from "../../Components/TextInput";
import MyErrors from "../../Components/Errors";
import MyButton from "../../Components/MyButton";
import { useHistory } from "react-router-dom";


function Login() {

    const emailFormat = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-]+)\.(com|net|edu|org)$/
    const passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: ""
    })

    //& Change User Data
    const chageUserData = (e) => {
        console.log(e.target.value)

        // ~ Check Email
        if (e.target.name == "email") {

            if (emailFormat.test(e.target.value)) {
                console.log('String matches the pattern');
                setErrors({
                    ...errors,
                    emailError: ""
                })
            } else {
                console.log('String Not matches the pattern');
                setErrors({
                    ...errors,
                    emailError: "Your input Not matche the pattern"
                })
            }
            setUserData({
                ...userData,
                email: e.target.value
            })

        }

        // ^ Check Password
        else {
            if (passFormat.test(e.target.value)) {
                console.log('String matches the pattern');
                setErrors({
                    ...errors,
                    passwordError: ""
                })

            } else {
                console.log('String Not matches the pattern');
                setErrors({
                    ...errors,
                    passwordError: "Password Not matches the pattern"
                })
            }
            setUserData({
                ...userData,
                password: e.target.value
            })
        }
    }

    //?  submit Data
    const submitData = (e) => {
        if (!errors.emailError || !errors.passwordError) {
            e.preventDefault()
        }
    }


    return (
        <div className="container m p-5 w-50 justify-content-center">

            <form >

                <div className="bg-white shadow rounded p-3">

                    <MyTitle title="Login Page" newClass="text-primary" valueClass="userData.email" />

                    {/* //& Email Input */}
                    <MyInput typeProps="text" valueProps={userData.email}
                        onChangeProps={(e) => chageUserData(e)}
                        ClassNameProps={errors.emailError ? "border-danger" : "border-success"} nameProps="email"
                        placeholderProps="Email address" />

                    {/* //& Error Email*/}
                    <MyErrors errorProps={errors.emailError} />

                    {/* //^ Password Input */}
                    <MyInput typeProps={showPassword ? 'text' : 'password'}
                        valueProps={userData.password} onChangeProps={(e) => chageUserData(e)}
                        ClassNameProps={errors.passwordError ? "border-danger" : "border-success"} nameProps="password"
                        placeholderProps="password" />

                    {/* //^ Password Error */}
                    <MyErrors errorProps={errors.passwordError} />


                    <div className="bg-white shadow rounded p-3 text-center">
                        {/* //& show Password */}
                        <label >
                            <input className="me-2 " type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                            Show Password
                        </label>
                        <br />

                        {/* //~ Submit */}

                        <button className="btn btn-primary btn-lg my-2" onClick={() => history.push("/")} >Login</button>

                        {/* //~ Forgotten password?--> */}
                        <a href="#" className="text-decoration-none text-center ">
                            <p>Forgotten password?</p>
                        </a>

                        {/* //~ Create New Account --> */}
                        <hr />
                        <button className="btn btn-success btn-lg my-2" onClick={() => history.push("/signUp")} >Create New Account</button>

                    </div>
                </div>
            </form>
        </div>

    )


}

export default Login;