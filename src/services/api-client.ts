import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "771d956ce01a49cbb05cf0a03d2c9da1",
  },
});
