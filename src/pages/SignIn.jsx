import * as React from 'react';
import "../style/SignIn.css"
import {useState} from 'react'



export default function SignIn() {

  

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  
  function saveData(){
   const datas = {
    firstName: firstName,
    lastName: lastName,
    mail: mail,
    password: password
   }
   fetch('http://localhost:80/users').then(res => console.log(res))

  }



  return (
    <div className='d-flex flex-column container-sign-in'>
      <main className="form-signin w-100 m-auto d-flex justify-content-center">
    
      <form className='col-3' id='form'>
        <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className='container-name'>
            <div className="form-floating">
                <input type="text" className="form-control" id="" placeholder="First name" value={firstName} onChange={(e)=>{
                  setFirstName(e.target.value)
                
                }} />
                <label >First Name</label>
            </div>
            <div className="form-floating mt-2">
                <input type="text" className="form-control" placeholder="Last name" value={lastName} onChange={(e)=>{
                  setLastName(e.target.value)
                
                }} />
                <label >Last Name</label>
            </div>
        </div>

        <div className="form-floating mt-2">
            <input type="mail" className="form-control" placeholder="Mail" value={mail} onChange={(e) => {
              setMail(e.target.value)
            }} />
            <label >Mail</label>
        </div>

        <div className="form-floating mt-2">
            <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) =>{
              setPassword(e.target.value)
            }}/>
            <label >Password</label>
        </div>

        <div className="form-floating mt-2">
            <input type="password" className="form-control" placeholder="Password" />
            <label >Repeat Password</label>
        </div>
        <div className='button-sign-in'>
        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={saveData}>Sign in</button>
        </div>
              <div id='writeMessage'></div>
      </form>
    </main>    
  </div>
  )
    
}