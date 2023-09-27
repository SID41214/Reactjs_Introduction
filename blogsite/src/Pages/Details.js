// import React, { useContext } from 'react'
import { useContext } from 'react';
import './Details.css';
import { Link, useParams } from 'react-router-dom';
import { mycontext } from '../App';

const Details = () => {
  const {id}=useParams()
    const {datas}=useContext(mycontext)
    console.log(id)
    const filter=datas.filter(item=>item.title==id)
    console.log(filter.map(item=>item.detail));
  return (
    <div>
        <h1
        style={{
          color: "red",
          fontFamily: "Times Roman",
          fontSize: "50px",
          textAlign: "center",
          background: "#67E3DA",
        }}
      >
        Details Of Selected Blog
      </h1>
      <div>
        <h2 style={{background:"lightblue",borderStyle:"solid"}}> 
        <Link to="/"> <button style={{
                background: " #CD5C5C",
                color: "white",
                fontWeight: "700",
                height:"50px",
              }}
               >Home Page</button></Link>Blog in Detail:{filter.map(item=>item.detail)} </h2>

      </div>
    </div>
  )
}

export default Details
