import * as React from 'react';
import "../style/Login.css"
import { Link } from 'react-router-dom';



export default function Login() {


  return (
    <div className='d-flex flex-column container-login'>
      <main className="form-signin w-100 m-auto d-flex justify-content-center">
    
      <form className='col-3'>
        <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please login</h1>
    
        <div className="form-floating">
          <input type="email" className="form-control" id="" placeholder="name@example.com" />
          <label >Email address</label>
        </div>
        <div className="form-floating mt-2">
          <input type="password" className="form-control" placeholder="Password" />
          <label >Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" className='' value="remember-me" /> 
              <span>Remember me</span>
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Connect</button>
        <div className='container-create-account'>
          <span>
            <Link to="/SignIn">Create an account</Link>
          </span>
        </div>

      </form>
    </main>
    <div className='container-footer fixed-bottom'>
    </div>    
  </div>
  )
    
}