"use client"
import React, { useState } from "react";

async function loginUser(credentials) {
  try {
    const response = await fetch('http://localhost:3333/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();

    if (data.status === 'login succuss') {
      window.location = './Adminpage';
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error.message);
    alert('Login failed');
    // Redirect to login page in case of error
    window.location = './Login';
  }
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await loginUser({
        email,
        password
      });
    } catch (error) {
      console.error('Login error:', error.message);
      alert('Login failed');
    }
  };
  return (
    <div>
      <div className="container">
        <div className="login-left">
          <div className="login-header">
            <h1>Welcome to Our Website</h1>
            <p>Please login to use Our Platform</p>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-content">
              <div className="form-item">
                <label htmlFor="email">Enter Email</label>
                <input type="text" id="email"
                onChange={(ev) =>setEmail(ev.target.value)}/>
              </div>
              <div className="form-item">
                <label htmlFor="password">Enter Password</label>
                <input type="password" id="password" 
                onChange={(ev) =>setPassword(ev.target.value)}/>
              </div>
              <div className="form-item">
                <div className="checkbox">
                  <input htmlFor="checkbox" id="rememberMeCheckbox"/>
                  <label htmlFor="rememberMeCheckbox" className="checkboxLabel">
                    Remember Me
                  </label>
                </div>
              </div>
              <button type="submit" >Sigh In</button>
            </div>
            <div className="login-form-footer">
              <a href="#">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                  alt="icon-facebook"
                  width="30px"
                />
                Facebook Login
              </a>
              <a href="# ">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="icon-google"
                  width="45px"
                />
                Google Login
              </a>
            </div>
          </form>
        </div>
        <div className="login-right">
          <img src="https://uploads.audi-mediacenter.com/system/production/media/122647/images/c0f44273ac21448d6f60aa0ccd398e9c738c660e/A240569_web_1920.jpg?1706003603" alt="" />
        </div>
      </div>
    </div>
  );
}
