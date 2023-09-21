import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div >
      <h3 style={{textAlign:'center',fontSize:'50px'}}>Home Page</h3>
      <div   style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
       
        }} >
        <div>
        <Link to="/">
         <button style={{background:'blue',color:'white'}}>Registration Page </button>
            </Link>
            <br/> 
            <Link to="/login">
            <button style={{background:'blue',color:'white'}}> Login Page </button>
      </Link>
       </div>


      </div>
    </div>
  )
}

export default Home
