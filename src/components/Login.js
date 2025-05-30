import { useState } from "react";
import Header from "./Header";
const Login = () => {
            
    const [isSignInForm, setSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }
    return <div>
        <Header />
        <div className="absolute">            
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_small.jpg" alt="logo.png" />
        </div>
        <form className="w-4/12 absolute p-10 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-medium text-2xl px-2 w-full">{isSignInForm ? "Sign In" : "Sign up"}</h1>
            {!isSignInForm && (<input type="text" placeholder="Full Name" className="py-1 px-2 m-2 w-full bg-gray-900 rounded-sm" />)}
            <input type="text" placeholder="Email Address" className="py-1 px-2 m-2 w-full bg-gray-900 rounded-sm" />
            <input type="password" placeholder="Password" className="py-1 px-2 m-2 w-full bg-gray-900 rounded-sm" />
            <button className="py-1 m-2 bg-red-700 w-full rounded-sm">{isSignInForm ? "Sign In" : "Sign up"}</button>
            <p className="py-1 m-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Signup Now" : "Already registered? Sign In Now"}</p>
        </form>
    </div>
}

export default Login;