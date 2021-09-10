import Axios from "axios";

export default Axios.create({
  baseUrl: "https://www.example.org/w/api.php",
  params: {
    action: "query",
    list: "search",
    format: "json",
  },
});
