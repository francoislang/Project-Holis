import * as React from 'react';

import Navbar from './components/Navbar';

export default function Login() {
  return (
    <div>
      <Navbar />
      <main className="form-signin w-100 m-auto d-flex justify-content-center ">
     
      <form className='col-3'>
        <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
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
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
  </main>
  
    </div>
  )
    
}