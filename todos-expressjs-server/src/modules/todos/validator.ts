import Joi from 'joi';
import { ITodoOrderPayload, ITodoPayload } from './model';

export function validateTodoCreatePayload(
  payload: ITodoPayload,
): Joi.ValidationResult<any> {
  const schema = Joi.object({
    text: Joi.string().required(),
    completed: Joi.boolean().default(false),
  });

  return schema.validate(payload);
}

//TODO: implement edit payload validation
export function validateTodoEditPayload(
  payload: ITodoPayload,
): Joi.ValidationResult<any> {
  const schema = Joi.object({
    text: Joi.string(),
    completed: Joi.boolean().default(false),
  });
  return schema.validate(payload);
}

export function validateTodoOrderPayload(
  payload: ITodoOrderPayload,
): Joi.ValidationResult<any> {
  const schema = Joi.object({
    ids: Joi.array().required(),
  });

  return schema.validate(payload);
}
