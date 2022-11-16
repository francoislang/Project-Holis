import * as React from 'react';
import "../style/SignIn.css"


export default function Login() {
  return (
    <div className='d-flex flex-column container-sign-in'>
      <main className="form-signin w-100 m-auto d-flex justify-content-center">
    
      <form className='col-3'>
        <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className='container-name'>
            <div className="form-floating">
                <input type="email" className="form-control" id="" placeholder="First name" />
                <label >First Name</label>
            </div>
            <div className="form-floating mt-2">
                <input type="password" className="form-control" placeholder="Last name" />
                <label >Last Name</label>
            </div>
        </div>

        <div className="form-floating mt-2">
            <input type="password" className="form-control" placeholder="Mail" />
            <label >Mail</label>
        </div>

        <div className="form-floating mt-2">
            <input type="password" className="form-control" placeholder="Password" />
            <label >Password</label>
        </div>

        <div className="form-floating mt-2">
            <input type="password" className="form-control" placeholder="Password" />
            <label >Repeat Password</label>
        </div>
        

        
    
        
        <button className="w-100 btn btn-lg btn-primary button-sign-in" type="submit">Sign in</button>
        
      </form>
    </main>
    <div className='container-footer fixed-bottom'>
    </div>    
  </div>
  )
    
}