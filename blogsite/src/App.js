import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Details from './Pages/Details';
import Home from './Pages/Home';
import CreateBlog from './Pages/CreateBlog';
import Details from './Pages/Details';
import { createContext,useState } from 'react';
// import CreateBlog from './Pages/CreateBlog';
export const mycontext =createContext()
function App() {
  

  const [datas,setDatas]=useState([])

  return (
    <div >
      <mycontext.Provider value={{datas,setDatas}}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<CreateBlog/>}/>
        <Route path="/blogs">
          <Route path=":id" element={<Details/>} />
          </Route>
          
      </Routes>
      </mycontext.Provider>
    </div>
  );
}

export default App;
