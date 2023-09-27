import React, { useContext, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { mycontext } from "../App";

const Home = () => {
  const{datas,setDatas} = useContext(mycontext);
  const [title,setTitle]=useState("")
  const [detail,setDetail]=useState("")
  const handleChange=()=>{
    
    setDatas([
      ...datas,{title:title,detail:detail}
    ])
  };

 
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
        Welcome To The Blog Home Page
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <form className="form">
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              id="title"
              style={{ width: "100%" }}
              placeholder="Enter Blog Title"
            
              onChange={(e)=>setTitle(e.target.value)}
          
            />
            <br />
            <label htmlFor="content">Blog Description</label>
            <br />
            <textarea
              id="content"
              rows="10"
              cols="95"
              placeholder="Enter Blog Description"
            
              onChange={(e)=>setDetail(e.target.value)}
          
            ></textarea>
            <br />
            <Link to="/blogs"> 
            <button
              style={{
                background: " #CD5C5C",
                color: "white",
                fontWeight: "700",
              }}
              onClick={()=>handleChange()}
            >
              {" "}
              Submit Blog{" "}
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
