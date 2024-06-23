import { usePayment } from "../Context/PaymentContext"
import Navbar from "./Navbar/Navbar"


function About() {
  const [Payment,]=usePayment()
  console.log(Payment)
  return (
    <div>
        <Navbar/>
        <div className="heading">
            About
        </div>
    </div>
  )
}

export default About