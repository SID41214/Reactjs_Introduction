import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div>
      <h3 style={{textAlign:'center',fontSize:'50px'}}>Register</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
       
        }}
      >
        <div>
          <label for="username"> UserName:</label>
          <br />
          <input type="text" id="username" placeholder="Enter Username" />
          <br />
          <label for="email">Email:</label>
          <br />
          <input type="email" id="email" placeholder="Enter Email" />
          <br />

          <label for="password"> Password:</label>
          <br />
          <input type="password" id="password" placeholder="Enter Password" />
          <br />

          <label for="repeat"> Repeat Password:</label>
          <br />
          <input type="password" id="repeat" placeholder="Repeat Password" />
            <br/><br/>
           <Link to="/login">
            <button style={{background:'blue',color:'white'}}> Login </button>
       </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
