import { useContext, useEffect, useRef, useState } from "react";
import { Form, Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);

    const { signIn } = useContext(AuthContext);
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }
    const handleValidate = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input ref={captchaRef} type="text" name="captcha" placeholder="type the text above" className="input input-bordered" />
                            <button onClick={handleValidate} className="btn btn-outline btn-xs mt-3">Validate</button>
                        </div>
                        <div className="form-control mt-6">

                            <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </Form>
                    <p className="text-center  mb-4"><small> New Here? <Link className="text-blue-600" to='/signin'> Create an account!</Link> </small></p>
                </div>
            </div>
        </div>
    );
};

export default Login;