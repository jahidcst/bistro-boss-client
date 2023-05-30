import { useContext } from "react";
import { FcGoogle } from "react-icons/Fc";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { google } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"
    // handle google sign in
    const handleGoogleSignIn = () => {
        google()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }

                fetch('http://localhost:8000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                            navigate(from, { replace: true });
                        
                    })



            })
            .catch(err => {
                console.log(err.massge);
            })
    }

    return (
        <div>
            {/* google */}
            <button className="flex justify-center items-center border space-x-1 p-2 mx-5 border-gray-300 rounded-xl cursor-pointer" onClick={handleGoogleSignIn}>
                <FcGoogle size={32}></FcGoogle>
                <p>Continue With Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;