import React, { useState } from "react";
import { signUpSchema } from "../helper/schema";
import logo from "../assets/logo.jpg";
import { signUp } from "../apis/loginRequest";
import { useRecoilState } from "recoil";
import { authAtom } from "../store/atoms/authAtom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const [authToken, setAuthToken] = useRecoilState(authAtom);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Validate form data with Zod schema
      signUpSchema.parse(formData);
      console.log("Form Data Submitted:", formData);

      // Call API to sign up the user
      signUp(formData, setAuthToken);
      if (authToken.isAuthenticated || authToken.token) {
        navigator("/home");
      }
      setErrors({}); // Clear any previous errors
    } catch (err) {
      // Handle validation errors from Zod
      if (err.errors) {
        const validationErrors = {};
        err.errors.forEach((error) => {
          validationErrors[error.path[0]] = error.message;
        });
        setErrors(validationErrors);
      } else {
        console.error("Unexpected Error:", err);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 md:flex-row md:space-x-8">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center mb-8 md:mb-0 md:w-1/2">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Go Wallet</h2>
        <img
          src={logo}
          alt="Logo"
          className="w-40 h-40 rounded-2xl shadow-md md:w-60 md:h-60"
        />
      </div>

      {/* Sign Up Form */}
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg md:w-1/2">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter your First Name"
              value={formData.firstName}
              required
              onChange={handleChange}
              className={`w-full px-4 py-2 text-gray-700 bg-gray-100 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter your Last Name"
              value={formData.lastName}
              required
              onChange={handleChange}
              className={`w-full px-4 py-2 text-gray-700 bg-gray-100 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="userName"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              id="userName"
              type="text"
              placeholder="Enter your username"
              value={formData.userName}
              required
              onChange={handleChange}
              className={`w-full px-4 py-2 text-gray-700 bg-gray-100 border ${
                errors.userName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.userName && (
              <p className="mt-1 text-sm text-red-500">{errors.userName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 text-gray-700 bg-gray-100 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 text-gray-700 bg-gray-100 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
