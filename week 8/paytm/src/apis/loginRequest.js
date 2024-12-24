import axios from "axios";

const base = "http://localhost:3000/api/v1/user";

const signUp = async (userData) => {
  try {
    console.log(userData);
    const response = await axios.post(`${base}/signup`);
    return userData;
  } catch (error) {
    console.log(error);
  }
};
