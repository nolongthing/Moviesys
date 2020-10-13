import { plainToClass, Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, Max, Min, validate } from "class-validator";
import { BaseEntity } from "./BaseEntity";

export class Movie extends BaseEntity{
  @IsNotEmpty({ message: '电影名称name不能为空' })
  @Type(() => String)
  public name: string;

  @IsNotEmpty({ message: "电影类型types不能为空" })
  @ArrayMinSize(1, { message: "电影类型types至少有一项" })
  @IsArray({ message: "电影类型types必须为数组" })
  @Type(() => String)
  public types: string[]

  @IsNotEmpty({ message: "上映地区areas不能为空" })
  @ArrayMinSize(1, { message: "上映地区areas至少有一项" })
  @IsArray({ message: "上映地区areas必须为数组" })
  @Type(() => String)
  public areas: string[]

  @IsNotEmpty({ message: "时长timeLong不能为空" })
  @IsInt({ message: "时长timeLong必须为整数" })
  @Min(1, { message: "时长timeLong最小为1分钟" })
  @Max(1800, { message: "时长timeLong最大为1800分钟" })
  @Type(() => Number)
  public timeLong: number

  @IsNotEmpty({ message: "是否热映isHot不可以为空" })
  @Type(() => Boolean)
  public isHot: boolean = false

  @IsNotEmpty({ message: "是否即将上映isComing不可以为空" })
  @Type(() => Boolean)
  public isComing: boolean = false

  @IsNotEmpty({ message: "是否经典影片isClassic不可以为空" })
  @Type(() => Boolean)
  public isClassic: boolean = false

  @Type(() => String)
  public description?: string

  @Type(() => String)
  public poster?: string
}