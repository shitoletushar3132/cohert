import axios from "axios";
import { toast } from "react-toastify";

const base = "http://localhost:3000/api/v1/user";

const signUp = async (userData, setAuthToken) => {
  const signUpToast = toast.loading("Signing up..."); // Show a loading toast
  try {
    const { userName, firstName, lastName, password } = userData;

    const response = await axios.post(`${base}/signup`, {
      userName,
      firstName,
      lastName,
      password,
    });

    if (!response?.data?.token) {
      throw new Error();
    }

    localStorage.setItem(
      "GoWallet",
      JSON.stringify({
        token: response.data.token,
        isAuthenticated: response.data.isAuthenticated,
      })
    );

    setAuthToken({
      token: response.data.token,
      isAuthenticated: response.data.isAuthenticated,
    });

    toast.update(signUpToast, {
      render: "Sign up successful!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
  } catch (error) {
    toast.update(signUpToast, {
      render:
        error.response?.data?.message || "Signup failed. Please try again.",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
};

const signIn = async (userData, setAuthToken) => {
  const signUpToast = toast.loading("Signing up...");

  try {
    const { userName, password } = userData;

    const response = await axios.post(`${base}/signin`, {
      userName,
      password,
    });

    if (!response?.data?.token) {
      throw new Error();
    }

    localStorage.setItem(
      "GoWallet",
      JSON.stringify({
        token: response.data.token,
        isAuthenticated: response.data.isAuthenticated,
      })
    );

    setAuthToken({
      token: response.data.token,
      isAuthenticated: response.data.isAuthenticated,
    });

    toast.update(signUpToast, {
      render: "Sign up successful!",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
  } catch (error) {
    console.log(error);
    toast.update(signUpToast, {
      render:
        error.response?.data?.message || "Signup failed. Please try again.",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
};

export { signUp, signIn };
