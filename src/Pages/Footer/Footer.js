import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Icon from "../../Components/Icon";
import MyButton from "../../Components/MyButton";
import SmallText from "../../Components/SmalText";


function MyFooter() {

    return (
        <>
            {/* Footer */}
            <footer className="text-center" style={{ "backgroundColor": "rgb(60, 60, 60)" }}>
                {/* <!-- Grid container --> */}
                <div className="container pt-4 " >
                    {/* <!-- Section: Form --> */}
                    <section className="" >
                        <form action="">
                            {/* <!--Grid row--> */}
                            <div className="row d-flex justify-content-center " >
                                {/* <!--Grid column--> */}
                                <div className="col-auto text-white">
                                    <p className="pt-2">
                                        <strong>Questions? Contact us.</strong>
                                    </p>
                                </div>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <div className="col-md-5 col-12">
                                    {/* <!-- Email input --> */}
                                    <div className="">
                                        <input type="email" className="form-control" placeholder="Email address" />
                                    </div>
                                </div>
                                {/* <!--Grid column-->*/}

                                {/* <!--Grid column--> */}
                                <div className="col-auto">
                                    {/* <!-- Submit button --> */}
                                    <button type="submit" className="btn btn-outline-primary mb-4"> SUBSCRIBE
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>

                <div className="text-center  p-3">
                    <div className=" row ">

                        <div className="col">
                            <Icon iconclass="bi-linkedin" />
                            <SmallText textclass="text-white fs-6" text="LinkedIn" />
                        </div>
                        <div className="col">
                            <Icon iconclass="bi-facebook" />
                            <SmallText textclass="text-white fs-6" text="Facebook" />
                        </div>
                        <div className="col">
                            <Icon iconclass="bi-twitter" />
                            <SmallText textclass="text-white fs-6" text="Twitter" />
                        </div>

                    </div>
                </div>
                {/* <!-- Copyright --> */}
            </footer>


        </>
    )
}


export default MyFooter;


{/* <div classNameName=" row">
<div className="col-3">
    <SmallText textclass="text-white fs-5" text="Questions? Contact us." />
    <SmallText textclass="text-white fs-6" text="Questions? Contact us." />
    <SmallText textclass="text-white fs-6" text="" />
</div>

<div className="row col-6 text-center mt-4">
    <MyButton className="align-middle btn-primary" btnname="CONTACT ME" />

        <div className=" row ">

            <div className="col">
                <Icon iconclass="bi-linkedin p-2" />
                <SmallText textclass="text-white fs-6" text="LinkedIn" />
            </div>

            <div className="col">
                <Icon iconclass="bi-facebook" />
                <SmallText textclass="text-white fs-6" text="Facebook" />
            </div>

            <div className="col">
                <Icon iconclass="bi-twitter p-2" />
                <SmallText textclass="text-white fs-6" text="Twitter" />
            </div>

    </div>
</div>
</div> */}