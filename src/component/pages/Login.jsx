// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { VscChromeClose } from 'react-icons/vsc'
// import SignUp from './SignUp';

// const Login = () => {
//     const navigate = useNavigate()

//     const [isSignUp, setIsSignUp] = useState(false);

//     const toggleForm = () => {
//         setIsSignUp(!isSignUp);
//     };

//     const userLogin = async (e) => {
//         e.preventDefault();
//         try {
//             // await context.Login(email,password)

//         } catch (error) {
//             window.alert(error)
//             console.log(error);

//         }
//     }

//     return (
//         <div className="loginSignup-container">
//             <span className='back-button' onClick={() => navigate("/")}>{<VscChromeClose />}</span>
//             <div className="form-container">
//                 <div className="form-header">
//                     <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
//                 </div>
//                 {isSignUp ? (
//                     <SignUp />
//                 ) :
//                     (
//                         <form>
//                             <div className="form-group">
//                                 <label htmlFor="email">Email</label>
//                                 <input type="email" id="email" placeholder="Enter your email" />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="password">Password</label>
//                                 <input type="password" id="password" placeholder="Enter your password" />
//                             </div>
//                             <button type="submit" className="form-submit">Sign In</ button>
//                         </form>
//                     )}
//                 <p onClick={toggleForm}>
//                     {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Login

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './firebase'; // Ensure the correct path to your firebase.js
import SignUp from './SignUp';
import { auth, db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState(null);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const userLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in as:', user);
    //   navigate('/dashboard'); // Redirect to dashboard after successful login
    // navigate('/')
     const user_data = auth.currentUser;
        // if (user_data) {
          const userDoc = await getDoc(doc(db, 'users', user_data.uid));
          const role = userDoc.data()?.role;
        //   setRole(role);
        // }
        console.log(role);
        role==="admin"? navigate("/admin"):navigate("/")
        
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className="loginSignup-container">
      <span className="back-button" onClick={() => navigate("/")}>
        <VscChromeClose />
      </span>
      <div className="form-container">
        <div className="form-header">
          <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
        </div>
        {isSignUp ? (
          <SignUp />
        ) : (
          <form onSubmit={userLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit" className="form-submit">Sign In</button>
          </form>
        )}
        <p onClick={toggleForm}>
          {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default Login;
