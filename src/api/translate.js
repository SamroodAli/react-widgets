import Axios from "axios";

export default Axios.create({
  baseURL: `https://translation.googleapis.com/language/translate/v2`,
  params: {
    key: `AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM`,
  },
});
