import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import { signIn } from "../apis/loginRequest";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authAtom } from "../store/atoms/authAtom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const [authToken, setAuthToken] = useRecoilState(authAtom);

  console.log(authToken);
  if (authToken.token) {
    navigate("/");
  }

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.userName.trim()) {
      newErrors.userName = "User Name is required.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await signIn(formData, setAuthToken);
      navigate("/");
    } catch {
      console.log("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
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

      {/* Sign In Form */}
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg md:w-1/2">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-700">
          Sign In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User Name Input */}
          <div>
            <label
              htmlFor="userName"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              User Name
            </label>
            <input
              id="userName"
              type="text"
              placeholder="Enter your user name"
              value={formData.userName}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 text-gray-700 bg-gray-100 border ${
                errors.userName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.userName && (
              <p className="mt-1 text-sm text-red-500">{errors.userName}</p>
            )}
          </div>

          {/* Password Input */}
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
              required
              className={`w-full px-4 py-2 text-gray-700 bg-gray-100 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Sign In
          </button>
        </form>
        <div>
          <p
            className="text-blue-600 mt-3 underline cursor-pointer"
            onClick={() => navigator("/signup")}
          >
            Create Account
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
