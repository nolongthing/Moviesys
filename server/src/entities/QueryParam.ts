import { Type } from "class-transformer";
import { IsInt, Min } from "class-validator";
import { BaseEntity } from "./BaseEntity";

export class QueryParam extends BaseEntity {

  @IsInt({ message: '单页数limit必须为整数' })
  @Min(1, { message: '单页数limit必须大于1' })
  @Type(() => Number)
  limit: number = 10;

  @IsInt({ message: '页码page值必须为整数' })
  @Min(1, { message: '页码page值必须大于1' })
  @Type(() => Number)
  page: number = 1;

  @Type(() => String)
  key?: string
}