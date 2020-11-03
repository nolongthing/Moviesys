import "reflect-metadata";
import MovieRouter from './routers/MovieRouter';
import UploadRouter from './routers/UploadRouter';
import bodyParser from 'body-parser';
import path from 'path';

import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

// app.use(cookieParser());
app.use(bodyParser.json());
/* 路由拦截 */
// app.use((req, res, next) => {
//   console.log('收到一个请求');
//   next();
// })

/* 静态资源访问 */
app.use('/images', express.static(path.resolve(__dirname, './public/images')));

/* 文件上传路由 */
app.use('/api/upload', UploadRouter);

app.use('/api/movie',cookieParser(),MovieRouter);

app.use('/jsonp', (req, res) => {
  const obj = { a: 1, b: 3 };
  // res.cookie('name', 'abc');
  res.send(`${req.query.cb}(${JSON.stringify(obj)})`)
})


app.listen(12306, () => {
  console.log('port listen on 12306')
});

// function getRandom(min, max) {
//   return Math.floor(Math.random()  * max+ min)
// }

// const areasArr = ["中国大陆", "中国台湾", "美国", "欧洲", "日本"];
// const typesArr = ["喜剧", "动作", "冒险", "外语"]
// for (let index = 1; index < 1000; index++) {
//   const movie = {
//     name: `电影${index}`,
//     timeLong: getRandom(1, 500),
//     types: [typesArr[getRandom(0, 4)]],
//     areas: [areasArr[getRandom(0, 5)]],
//   }
//   MovieService.addMovie(movie).then(res => {

//   });
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
