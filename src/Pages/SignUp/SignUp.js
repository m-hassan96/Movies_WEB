import { useState } from "react";
import MyTitle from "../../Components/MyTitle";
import { useHistory } from "react-router-dom";


function SignUp() {

    const nameFormat = /^[a-zA-Z]{3,20}$/
    const emailFormat = /^([a-zA-Z0-9_]+)@([a-zA-Z_]+).(com|net|edu|org)$/
    const passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{4,}$/
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        userName: "",
        password: "",
        repPassword: ""
    })

    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        userNameError: "",
        passwordError: "",
        repPasswordError: ""
    })

    //& Change & check User Data
    const chageUserData = (e) => {
        console.log(e.target.value)

        // ~ Check name
        if (e.target.name === "name") {

            if (nameFormat.test(e.target.value)) {
                console.log('String matches the pattern');
                setErrors({
                    ...errors,
                    nameError: ""
                })
            } else {
                console.log('String Not matches the pattern');
                setErrors({
                    ...errors,
                    nameError: "Your input Not matche the pattern"
                })
            }
            setUserData({
                ...userData,
                name: e.target.value
            })

        }
        // ~ Check Email
        else if (e.target.name === "email") {

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
        // ~ Check userName
        else if (e.target.name === "userName") {

            if (nameFormat.test(e.target.value)) {
                console.log('String matches the pattern');
                setErrors({
                    ...errors,
                    userNameError: ""
                })
            } else {
                console.log('String Not matches the pattern');
                setErrors({
                    ...errors,
                    userNameError: "Your input Not matche the pattern"
                })
            }
            setUserData({
                ...userData,
                userName: e.target.value
            })

        }
        // ^ Check Password
        else if (e.target.name === "password") {
            setUserData({
                ...userData,
                password: e.target.value
            })

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
        }

        // ^ Check repPassword
        else {
            console.log(e.target.value);
            console.log(userData.password);
            setUserData({
                ...userData,
                repPassword: e.target.value
            })

            if (e.target.value === userData.password) {
                console.log('Password matches the pattern');
                setErrors({
                    ...errors,
                    repPasswordError: ""
                })

            } else {
                setErrors({
                    ...errors,
                    repPasswordError: "Repeated Password Not matches the Password"
                })
            }
        }
    }

    //?  submit Data
    const submitData = (e) => {
        if (!errors.emailError || !errors.passwordError) {
            e.preventDefault()
        }
    }


    return (
        <div className="container p-5 w-50 justify-content-center">

            <form onSubmit={(e) => submitData(e)}>

                <div className="bg-white shadow rounded p-3">

                    <MyTitle title="Signup Page" newClass="text-primary" valueClass="userData.name" />

                    {/* //& name Input */}
                    <input type="text"
                        className={`form-control mt-5 `} //${errors.nameError ? "border-danger" : "border-success"}
                        value={userData.name}
                        onChange={(e) => chageUserData(e)}
                        name="name" placeholder="Your Name" />
                    <p className="text-danger"> {errors.nameError}  </p>

                    {/* //& Email Input */}
                    <input type="text"
                        className={`form-control my-3`} // ${errors.emailError ? "border-danger" : "border-success"}
                        value={userData.email}
                        onChange={(e) => chageUserData(e)}
                        name="email" placeholder="Email address" />
                    <p className="text-danger"> {errors.emailError}  </p>

                    {/* //& User name Input */}
                    <input type="text"
                        className={`form-control `} //${errors.userNameError ? "border-danger" : "border-success"}
                        value={userData.userName}
                        onChange={(e) => chageUserData(e)}
                        name="userName" placeholder="User Name" />
                    <p className="text-danger"> {errors.userNameError}  </p>

                    {/* //& Password Input */}
                    <input type={showPassword ? 'text' : 'password'}
                        className={`form-control my-3 `} // ${errors.passwordError ? "border-danger" : "border-success"}
                        value={userData.password}
                        onChange={(e) => chageUserData(e)}
                        name="password" placeholder="Password" />
                    <p className="text-danger"> {errors.passwordError} </p>

                    {/* //& Repeat Password Input */}
                    <input type={showPassword ? 'text' : 'password'}
                        className={`form-control `} //${errors.repPasswordError ? "border-danger" : "border-success"}
                        value={userData.repPassword}
                        onChange={(e) => chageUserData(e)}
                        name="repPassword" placeholder="Repeat Password" />
                    <p className="text-danger"> {errors.repPasswordError} </p>

                    {/* //& show Password */}
                    <label >
                        <input className="me-2 " type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                        Show Password
                    </label>

                    {/* //~ Create New Account --> */}
                    <hr />
                    <div className="text-center my-2">
                        <button disabled={errors.emailError || errors.passwordError || errors.nameError ||
                            errors.userNameError || errors.repPasswordError && "disabled"}
                            className="btn btn-success btn-lg" type="button" onClick={() => history.push("/login")}> Register </button>

                    </div>
                </div>

            </form>
        </div>

    )


}

export default SignUp;