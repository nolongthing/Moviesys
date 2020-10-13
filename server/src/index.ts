import "reflect-metadata";
import { MovieService } from "./services/MovieService";
import MovieRouter from './routers/MovieRouter';
import express from 'express';

const app = express();

app.use('/api/movie', MovieRouter)


app.listen(12306, () => {
  console.log('port listen on 3000')
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
// MovieService.edit('5f8423ebb80bc100a046c38d',movie).then(res=>{
//   console.log(res);
// })

// MovieService.find({ name: '一路向北' }).then(res => {
//   console.log(res);
// })

// MovieService.delete(['5f842c7071c36b346428dd51']).then(res=>{
//   console.log(res);
// })
