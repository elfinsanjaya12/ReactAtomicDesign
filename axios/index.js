import axios from "axios";

const url = "http://localhost:5432";

export default axios.create({
  baseURL: url
});
