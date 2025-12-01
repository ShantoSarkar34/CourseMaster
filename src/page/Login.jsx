import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and Password are required!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      // Save user to Auth Context + LocalStorage
      logIn(res.data);
      toast.success("Login successful!");

      navigate("/"); // redirect home or dashboard
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials");
    }
  };

  const showPassword = () => {
    setShow(!show);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg focus:outline-1 focus:outline-indigo-600  border border-gray-400 mb-6"
          required
        />

        {/* Password */}
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg focus:outline-1 focus:outline-indigo-600  border border-gray-400 mb-6"
            required
          />

          <button
            type="button"
            onClick={showPassword}
            className=" absolute top-4 right-3 cursor-pointer"
          >
            {show ? (
              <FaRegEye className="text-gray-600" />
            ) : (
              <FaRegEyeSlash className="text-gray-600" />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl font-bold text-background text-lg transition-transform transform shadow-lg text-white cursor-pointer"
          style={{
            backgroundColor: "var(--color-secondary)",
          }}
        >
          Login
        </button>

        <p className="text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-secondary font-medium underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
