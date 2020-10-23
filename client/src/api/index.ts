import Axios from "axios";

export async function getMovie() {
  return await Axios.post("/api/movie")
}