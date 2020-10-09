import "reflect-metadata";
import { MovieModel } from "./db";
// import { plainToClass } from "class-transformer";
// import { validate } from "class-validator";
// import { Movie } from "./entities/Movie";
// const movie = new Movie();
// movie.name = "来电狂想";
// movie.types = ["喜剧"];
// movie.areas = ["中国大陆"];
// movie.timeLong = 3;
// const m = { name: 123 };
// const movie = plainToClass(Movie, m);
// validate(movie).then(error => {
//   console.log(error);
// })

MovieModel.find().then(ms => {
  console.log(ms);
})

