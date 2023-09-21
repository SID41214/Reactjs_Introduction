import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <h3 style={{textAlign:'center',fontSize:'50px'}}>Login</h3>
      <div      style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
       
        }}>
            <div>
      <label for="username"> UserName:</label>
          <br />
          <input type="text" id="username" placeholder="Enter Username" />
          <br />
          <label for="password"> Password:</label>
          <br />
          <input type="password" id="password" placeholder="Enter Password" />
         <br/><br/>
         <Link to="/home">
         <button style={{background:'blue',color:'white'}}>Home </button>
        </Link>
         </div>
      </div>
    </div>
  )
}

export default Login
