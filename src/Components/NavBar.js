import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <li>
               <Link to="/"> <ul>Home</ul> </ Link>
               <Link to="/dashboard">  <ul>Dashboard</ul> </ Link>
                <Link to="/about"> <ul>About</ul> </ Link>
            </li>
        </div>
    )
}

export default NavBar
