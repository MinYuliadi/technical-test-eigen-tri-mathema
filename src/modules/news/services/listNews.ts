import axios from "axios";
import api from "../constants/api";

const listNews = async (query: string) => {
  try {
    const response = await axios.get(
      `${api.list}?country=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
    );

    return response
  } catch (error) {
    console.log(error)
  }
};

export default listNews;
