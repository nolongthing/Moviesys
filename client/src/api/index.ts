import Axios from "axios";

export async function getMovie() {
  return await Axios.post("/api/movie")
}

/* Jsonp封装 */
export function doJsonp(url: string, callback: any) {
  const script = document.createElement('script');
  function doRender(data: object) {
    callback(data);
    document.body.removeChild(script);
  }
  (window as any).doRender = doRender;
  script.src = url;
  document.body.appendChild(script);
}

/* 文件上传接口 */
export async function uploadImg(data: FormData) {
  return await Axios.post('/api/upload', data)
}