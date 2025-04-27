import './Login.css';
import logo from "../../assets/logo.png";
import { useState } from 'react';
import { login ,SignUp } from '../../firebase';
import netflix_spinner from "../../assets/netflix_spinner.gif"


function Login(){

    const[loginState,setState] = useState("Sign In");
    const[name,Setname] = useState("")
    const[email,Setemail] = useState("")
    const[password,Setpassword] = useState("")
    const[loading,setLoading] = useState(false);

    const user_auth = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (!email || !password || (loginState === "Sign Up" && !name)) {
            alert("Please fill in all fields.");
            return;
        }
        if (loginState === "Sign In") {
            await login(email,password);
        } else {
            await SignUp(name,email,password);
        }
        setLoading(false)
    }
    

    return (
        loading?<div className="spinner">
        <img src={netflix_spinner} alt="" />
    </div>:
        <>
       <div className="Login">
        <img src={logo}  className='Login-logo' alt="" />
        <div className="Login-form">
        <h1>{loginState}</h1>
        <form onSubmit={user_auth} >
            {loginState === "Sign Up" ? <input value={name} onChange={(e)=> Setname(e.target.value)} type="text" placeholder='Your Name' /> : <></>}
            <input value={email} onChange={(e)=> Setemail(e.target.value)} type="email" placeholder='Email' />
            <input value={password} onChange={(e)=> Setpassword(e.target.value)}type="password" placeholder='Password' />
            <button type='submit' >{loginState}</button>
            <div className="form-help">
                <div className="remember">
                    <input type="checkbox" />
                    <label htmlFor="">Remember Me</label>
                </div>
                <p>Need help?</p>
            </div>
        </form>
        <div className="form-switch">
            {loginState === "Sign Up"?<p>Already have account?<span onClick={()=> setState('Sign In')}>Sign In Now</span></p>:
            <p>New to Netflix?<span onClick={()=> setState('Sign Up')}>Sign Up</span></p>}
        </div>
        </div>      
        </div>
        </>
    )
}
export default Login;