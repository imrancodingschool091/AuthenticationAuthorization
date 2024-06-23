import Navbar from "../Navbar/Navbar";
import "./Auth.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let userInfo = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    try {
      let response = await axios.post("http://localhost:4000/user/signup", userInfo);

      if (response.status==201) {
        toast.success(response.data.message, { position: "top-center" });
        localStorage.setItem("User",JSON.stringify(response.data.newUser))
      } 

      else if (response.status==="404") {
        toast.error(response.data.message, { position: "top-center" });
        
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code outside the range of 2xx
        if (error.response.status === 404) {
          toast.error("User Already Exists", { position: "top-center" });
        } else if (error.response.status === 500) {
          toast.error("500 server ERR: " + error.response.data.message, { position: "top-center" });
        } else {
          toast.error(error.response.data.message || "An error occurred during signup", { position: "top-center" });
        }
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response received from server", { position: "top-center" });
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error("An error occurred while setting up the request", { position: "top-center" });
      }
    }
  };

  return (
    <div>
      <Navbar />

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Signup Form</h1>

        <input
          type="text"
          placeholder="username"
          {...register("username", { required: true })}
        />
        {errors.username && <span>This field is required</span>}

        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}

        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <button type="submit">Signup</button>

        <div className="message">
          <p>Have an account?</p>
          <span>
            <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
