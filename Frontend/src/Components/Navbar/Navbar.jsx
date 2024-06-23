 import "./Navbar.css"
 import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
        <nav>
        <div className="nav-logo">
            <a href="#">Logo</a>
        </div>

        <ul className="nav-list">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            
            <li><Link to={'/paymentForm'}>payment Form</Link></li>
            <div className="nav-login">
            <button><Link to={"/login"}>Login</Link></button>
        </div>
        </ul>
      
        </nav>
   



    </div>
  )
}

export default Navbar