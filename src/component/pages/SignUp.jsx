import React from 'react'
const SignUp = () => {
    return (
        <>
        <div className="form-group">
          <label htmlFor="name">UserName</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
      </>
    )
}

export default SignUp