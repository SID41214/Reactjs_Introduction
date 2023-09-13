import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import "./Todoapp.css"

const Todoapp = () => {
    const[text,setText]=useState("")
    const[list,setList]=useState([])
    function AddItem(){
        if(text === ""){
       alert("Enter Any Item to Add")
        }else{
            const item ={id:list.length,value:text}
            setList((pre)=> [...pre,item])
        }
      
    }
    function removeItem(id){
      
       const filtered= list.filter((item)=> item.id !=id)
       setList(filtered)

    }
  return (
    <div>
      <div className='todo-container'>
        <h1>Todo App</h1>
        <div className='input-section'>
            <input type='text' placeholder='Enter Items to Add' onChange={(e)=> setText(e.target.value)}/>
            <Button variant="primary" onClick={()=> AddItem()}>Add</Button>{' '}
        </div>
        <ul>
            {list.map((item,index)=>(
                
            <li> {item.value}  <Button onClick={()=> removeItem(item.id)}>REMOVE</Button></li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Todoapp
