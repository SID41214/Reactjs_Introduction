import { Link, Outlet } from "react-router-dom"

export function BookLayout(){
    return(
        <div>
            
        <Link to="/books/1">Book 1</Link>
        <br/>
        <Link to="/books/2">Book 2</Link>
        <br/>
        <Link to="/books/new">NewBook</Link>
        <Outlet context={{hello: "world"}}/>
        </div>
    )
}