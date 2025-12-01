import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CryptoJS from "crypto-js";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const securePassword = (password) => {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!formData.agree) {
      toast.error("You must agree to the terms!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password, // send plain password, backend will hash
      });

      localStorage.setItem("userInfo", JSON.stringify(res.data));
      toast.success("Registration successful! Logged in.");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        agree: false,
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 lg:pt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-linear-to-br from-primary/90 to-accent/80 shadow-2xl rounded-xl p-10 w-full max-w-md backdrop-blur-md"
      >
        <h2 className="text-4xl font-bold text-background mb-8 text-center drop-shadow-lg">
          Create Your Account
        </h2>

        {/* Name */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
            className="w-1/2 px-4 py-3 rounded-lg focus:outline-1 focus:outline-indigo-600  border border-gray-400"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
            className="w-1/2 px-4 py-3 rounded-lg focus:outline-1 focus:outline-indigo-600  border border-gray-400"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-4 py-3 rounded-lg focus:outline-1 focus:outline-indigo-600  border border-gray-400 mb-6"
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="w-full px-4 py-3 rounded-lg focus:outline-1 focus:outline-indigo-600  border border-gray-400 mb-6"
        />

        {/* Password */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-lg focus:outline-1 focus:outline-indigo-600  border border-gray-400 "
          />
          <span
            className="absolute right-4 top-3 cursor-pointer text-background"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaRegEyeSlash className="text-gray-700" />
            ) : (
              <FaRegEye className="text-gray-700" />
            )}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-6">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            className="w-full px-4 py-3 rounded-lg focus:outline-1 focus:outline-indigo-600  border border-gray-400"
          />
          <span
            className="absolute right-4 top-3 cursor-pointer text-background"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <FaRegEyeSlash className="text-gray-700" />
            ) : (
              <FaRegEye className="text-gray-700" />
            )}
          </span>
        </div>

        {/* Agree Checkbox */}
        <label className="flex items-center mb-2 cursor-pointer">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="w-5 h-5 text-accent transition"
          />
          <span className="ml-3 text-gray-600">
            I agree to the <span className="underline">terms & conditions</span>
          </span>
        </label>
        <p className="mb-5 text-gray-600">
          Already have an account?{" "}
          <span>
            <button
              type="button"
              onClick={handleNavigate}
              className=" cursor-pointer underline font-semibold text-secondary"
            >
              Login
            </button>
          </span>
        </p>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl font-bold text-background text-lg transition-transform transform shadow-lg text-white cursor-pointer"
          style={{
            backgroundColor: "var(--color-secondary)",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
