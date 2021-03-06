import Mongoose from "mongoose";
import { MovieModel } from "../db";
import { IMovie } from "../db/MovieSchema";
import { Movie } from "../entities/Movie";

export class MovieService {
  private static async supFun(movie, isSkip = false) {
    /* 对象转换 */
    const movieTrue = Movie.MovieTransform<Movie>(Movie, movie);
    /* 数据验证 */
    const validateResult = await movieTrue.validateThis(isSkip);
    if (validateResult.length > 0) {
      return validateResult;
    } else {
      return movieTrue
    }
  }

  static async addMovie(movie: object): Promise<IMovie | string[]> {
    const movieTrue = await this.supFun(movie);
    if (movieTrue instanceof Movie) {
      /* 数据插入 */
      const result = await MovieModel.create(movieTrue);
      return result;
    } else {
      return movieTrue;
    }
  }

  static async edit(_id: string, movie: object) {
    const movieTrue = await this.supFun(movie, true);
    if (movieTrue instanceof Movie) {
      const result = await MovieModel.updateOne({ _id }, movie);
      return result;
    } else {
      return movieTrue;
    }
  }

  static async find(query: object, limit: number = 10, page: number = 0) {
    const result = await MovieModel.find(query, '', { limit: limit, skip: page * limit }).sort({ _id: 1 });
    const total = await MovieModel.countDocuments(query);
    return { total, data: result };
  }

  static async delete(ids: string[]) {
    const result = await MovieModel.deleteMany({ _id: ids });
    return result;
  }
}