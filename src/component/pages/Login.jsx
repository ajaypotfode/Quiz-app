import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { VscChromeClose } from 'react-icons/vsc'
import SignUp from './SignUp';

const Login = () => {
    const navigate=useNavigate()

    const [isSignUp, setIsSignUp] = useState(false);
        
    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const userLogin = async(e) => {
        e.preventDefault();
       try {
        // await context.Login(email,password)
        
       } catch (error) {
          window.alert(error)
          console.log(error);
          
       }
    }

    return (
        <div className="loginSignup-container">
            <span className='back-button' onClick={()=>navigate("/")}>{<VscChromeClose/>}</span>
            <div className="form-container">
                <div className="form-header">
                    <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                </div>
                <form>
                    {isSignUp && (
                        <SignUp />
                    )}
                    {!isSignUp && (
                        <>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" />
                            </div>
                        </>
                    )}
                    <button type="submit" className="form-submit">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>
                <p onClick={toggleForm}>
                    {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                </p>
            </div>
        </div>
    );
}

export default Login