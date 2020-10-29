import Axios from "axios";

export async function getMovie() {
  return await Axios.post("/api/movie")
}

export async function uploadImg(data: FormData) {
  return await Axios.post('/api/upload', data)
}