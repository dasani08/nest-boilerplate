import * as _ from 'lodash';
import { plainToClass, ClassTransformOptions } from 'class-transformer';

interface EntityInterface {
  toJSON: () => any;
}

const classTransformerOpts = <ClassTransformOptions>{
  strategy: 'excludeAll',
  enableImplicitConversion: true,
};

export class UtilsService {
  /**
   * convert schema to dto class instance
   * @param {{new(schema: E, options: any): T}} model
   * @param {E[] | E} schema
   * @param options
   * @returns {T[] | T}
   */
  public static toDto<T, E extends EntityInterface>(
    model: new (entity: E, options?: any) => T,
    entity: E,
    options?: any,
  ): T;
  public static toDto<T, E extends EntityInterface>(
    model: new (entity: E, options?: any) => T,
    entity: E[],
    options?: any,
  ): T[];
  public static toDto<T, E extends EntityInterface>(
    model: new (entity: E, options?: any) => T,
    entity: E | E[],
    options?: any,
  ): T | T[] {
    return plainToClass(model, entity, classTransformerOpts);
  }
  public static pick(
    obj: { [key: string]: any },
    paths: string[],
  ): { [key: string]: any } {
    return _.pickBy(_.pick(obj, paths), (value) => !_.isEmpty(value));
  }
  public static omit(
    obj: { [key: string]: any },
    paths: string[],
  ): { [key: string]: any } {
    return _.omit(obj, paths);
  }
}
