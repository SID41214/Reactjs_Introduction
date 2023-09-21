// import logo from './logo.svg';
import {Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Home from './Pages/Home';
// import { Home } from './Pages/Home';
// import { BookList } from './Pages/BookList';
// import { Book } from './Pages/Book';
// import { NewBook } from './Pages/NewBook';
// import { NotFound } from './Pages/NotFound';
// import { BookLayout } from './Pages/BookLayout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration/>} />
        
        <Route path="/login" element={<Login/>} />

        <Route path="/home" element={<Home/>} />

      </Routes>
   

    </div>
  );
}

export default App;
{/* <nav>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/books">Books</Link>
  </li>
</ul> 
</nav>
<Routes>
<Route path="/"element={<Home/>} />
<Route path="/books" element={<BookLayout/>}>
  <Route index element={<BookList/>} />
  <Route path=":id" element={<Book/>} />
  <Route path="new" element={<NewBook/>} />
</Route>

{/* <Route path='/books' element={<BookList/>} />
<Route path='/books/:id' element={<Book/>} />
<Route path='/books/new' element={<NewBook/>} /> */}
// {/* <Route path='*' element={<NotFound/>} />
// </Routes> */} */}
