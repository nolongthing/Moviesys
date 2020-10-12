import "reflect-metadata";
import { MovieService } from "./services/MovieService";


const movie = {
  name: '心花怒放',
  timeLong: 233,
  types: ['喜剧'],
  areas: ['中国大陆']
}
// MovieService.addMovie(movie).then(res => {
//   console.log(res);
// });
// MovieService.edit('5f8423ebb80bc100a046c38d',movie).then(res=>{
//   console.log(res);
// })

// MovieService.find({ name: '一路向北' }).then(res => {
//   console.log(res);
// })

MovieService.delete(['5f842c7071c36b346428dd51']).then(res=>{
  console.log(res);
})