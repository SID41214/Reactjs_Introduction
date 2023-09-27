import React, { useContext } from 'react';
import "./CreateBlog.css";
import { Link } from 'react-router-dom';
import { mycontext } from '../App';

const CreateBlog = () => {
  const { datas, setDatas } = useContext(mycontext);

  const handleDelete = (titleToDelete) => {
    // Filter out the blog with the specified title
    const updatedDatas = datas.filter(item => item.title !== titleToDelete);
    setDatas(updatedDatas);
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
       Submitted Blog List
      </h1>
      <div >
        <div >
        {datas.map((item,idx)=>{
        return(
          <h2 style={{background:"lightblue",borderStyle:"solid"}} key={idx}>
            
            <button
                  style={{
                    background: "#CD5C5C",
                    color: "white",
                    fontWeight: "700",
                    height: "50px",
                  }}
                  onClick={() => handleDelete(item.title)}
                >
                  Delete
                </button>
        
        
        <Link to={"/blogs/"+item.title}> <button style={{
                background: " #CD5C5C",
                color: "white",
                fontWeight: "700",
                height:"50px",
              }}
               >view Details</button></Link>Title:{item.title}
       </h2>
       
        )
      })}
      
      </div>

      </div>
    </div>
  )
}

export default CreateBlog;
