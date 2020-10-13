import { plainToClass } from "class-transformer";
import { ClassType } from "class-transformer/ClassTransformer";
import { validate } from "class-validator";

export abstract class BaseEntity {
  async validateThis() {
    const errors = await validate(this);
    let errorArr: string[] = [];
    const temp = errors.map(i => Object.values(i.constraints || {}));
    temp.forEach(item => {
      errorArr = [...errorArr, ...item];
    })
    return errorArr;
  }

  static MovieTransform<T>(cls: ClassType<T>, plainObj: object): T {
    if (plainObj instanceof cls) {
      return plainObj;
    }
    return plainToClass(cls, plainObj);
  }
}