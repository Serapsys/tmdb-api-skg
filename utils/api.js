import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "0925875d103f5cd4ec2ab7381d8ce8dc";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromAPI = async (url, params) => {
  try {
    const fullURL = BASE_URL + url + "?api_key=" + TMDB_TOKEN;
    const { data } = await axios.get(fullURL, { headers, params });
    return data;
  } catch (err) {
    return err;
  }
};

export const testingHeadersfetchDataFromAPI = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, { headers, params });
    return data;
  } catch (err) {
    return err;
  }
};
