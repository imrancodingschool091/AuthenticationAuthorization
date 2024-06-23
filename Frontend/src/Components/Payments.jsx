import { toast } from "react-toastify"
import { Link } from "react-router-dom"

import Navbar from "./Navbar/Navbar"





function Payments() {
  



  return (
    <div>
        <Navbar/>
        <div className="heading">
            Payment


            
        </div>
        <hr />
        <br />
        <Link to={'/feedback'}>recipt</Link>
    </div>
  )
}

export default Payments