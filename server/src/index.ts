import "reflect-metadata";
import { MovieService } from "./services/MovieService";
import MovieRouter from './routers/MovieRouter';
import UploadRouter from './routers/UploadRouter';
import path from 'path';

import express from 'express';

const app = express();

/* 路由拦截 */
// app.use((req, res, next) => {
//   console.log('收到一个请求');
//   next();
// })

/* 静态资源访问 */
app.use('/images', express.static(path.resolve(__dirname, './public/images')));

/* 文件上传路由 */
app.use('/api/upload', UploadRouter);

app.use('/api/movie', MovieRouter)


app.listen(12306, () => {
  console.log('port listen on 12306')
});


// const movie = {
//   name: '从心出发',
//   timeLong: 233,
//   types: ['喜剧'],
//   areas: ['中国大陆']
// }
// MovieService.addMovie(movie).then(res => {
//   console.log(res);
// });

// MovieService.edit('5f842c81d8499a2c64085bb5',{name:"走向共和"}).then(res=>{
//   console.log(res);
// })

// MovieService.find({ name: '一路向北' }).then(res => {
//   console.log(res);
// })

// MovieService.delete(['5f842c7071c36b346428dd51']).then(res=>{
//   console.log(res);
// })
