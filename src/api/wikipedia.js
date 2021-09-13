import Axios from "axios";

export default Axios.create({
  baseURL: "https://en.wikipedia.org/w",
  params: {
    action: "query",
    list: "search",
    origin: "*",
    format: "json",
  },
});
