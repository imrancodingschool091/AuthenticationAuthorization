import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/About";
import Payments from "./Components/Payments";
import Signup from "./Components/Authentication/Signup";
import Login from "./Components/Authentication/Login";
import PaymentForm from "./Components/Authentication/PaymentForm";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { usePayment } from "./Context/PaymentContext";
import Feeback from "./Components/Feeback";
// import Feedback from "./Components/Feeback";

function App() {
  // const [Payment] = usePayment();
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payments />} />
        <Route path="/paymentForm" element={<PaymentForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feedback" element={<Feeback/>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
