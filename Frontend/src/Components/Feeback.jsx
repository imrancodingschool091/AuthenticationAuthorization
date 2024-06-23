import { toast } from "react-toastify";
import { usePayment } from "../Context/PaymentContext";
import Navbar from "./Navbar/Navbar";
import React, { useRef, useEffect } from "react";
import { useScreenshot } from "use-react-screenshot";
import { useNavigate } from "react-router-dom";

function Feedback() {
  const navigate = useNavigate();
  const [Payment, setPayment] = usePayment();
  const ref = useRef(null);
  const [image, takeScreenshot] = useScreenshot();

  // Fetch payment data from local storage on component mount
  useEffect(() => {
    if (!Payment) {
      const savedPayment = localStorage.getItem("Payment");
      if (savedPayment) {
        setPayment(JSON.parse(savedPayment));
      }
    }
  }, [Payment, setPayment]);

  const logoutHandler = () => {
    setPayment(null);
    localStorage.removeItem("Payment");

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const getImage = async () => {
    try {
      const imageData = await takeScreenshot(ref.current);
      downloadScreenshot(imageData);
    } catch (error) {
      console.error("Error while taking screenshot:", error);
    }
  };

  const downloadScreenshot = (imageData) => {
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "screenshot.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <Navbar />
      <hr />
      <hr />
      <div ref={ref}>
        <h1>Donation10Foundation</h1>
        {Payment ? (
          <>
            <h2>Name: {Payment.name}</h2>
            <h2>City: {Payment.city}</h2>
            <h2>Amount: {Payment.amount}</h2>
          </>
        ) : (
          <p>No payment data available.</p>
        )}
      </div>
      <button onClick={getImage}>Download</button>
      <button onClick={logoutHandler}>Home</button>
      <br />
      <hr />
      <h3>Footer content here</h3>
    </div>
  );
}

export default Feedback;
