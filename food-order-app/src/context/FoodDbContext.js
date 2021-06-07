import axios from "axios";

const instance = axios.create({
  baseURL: "https://reactdata-ccb9d-default-rtdb.firebaseio.com/",
});

export default instance;
