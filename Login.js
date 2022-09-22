
import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login() {

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);
 
  const login = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    const userData = {
      name,
      email,
      password,
    };
    localStorage.setItem('token-info', JSON.stringify(userData));
    setIsLoggedin(true);
    setName('');
    setEmail('');
    setPassword('');
  };
 
  const logout = () => {
    localStorage.removeItem('token-info');
    setIsLoggedin(false);
  };
    return (
       <div>
       <Navbar/>
     
        <div className='container-fluid'>
            <div className='row'>

                <div className='col-md-4 col-10 mx-auto'>
                {!isLoggedin ? (
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"  onChange={(e) => setEmail(e.target.value)}
                            value={email} aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"  onChange={(e) => setPassword(e.target.value)}
                            value={password} />
                        </div>

                        <NavLink to="/Product" type='s' onClick={login} class="btn btn-primary">Submit</NavLink>
                    </form>
                )
                : (
                    <>
                     
                      <button onClickCapture={logout} className="btn btn-primary">logout user</button>
                    </>
                    )}

                </div>
            </div>


        </div>
        </div>
    )
}

export default Login