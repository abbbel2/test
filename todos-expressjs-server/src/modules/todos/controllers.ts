import {
  IControllerResult,
  newControllerData,
  newControllerError,
} from '../../utils/controller-result.model';
import { todosDal, TodosDal } from './dal';
import { ITodoOrderPayload, ITodoPayload, Todo } from './model';
import { validateTodoCreatePayload, validateTodoEditPayload, validateTodoOrderPayload } from './validator';

export class TodosController {
  todosDal: TodosDal;
  constructor(todosDal: TodosDal) {
    this.todosDal = todosDal;
  }

  create(payload: ITodoPayload): IControllerResult<Todo> {
    const { error, value } = validateTodoCreatePayload(payload);
    if (error) {
      return newControllerError(error.details[0].message, 400);
    }

    return newControllerData(this.todosDal.create(value));
  }

  //TODO: Implement get all
  getAll(): IControllerResult<Todo[]> {
    return newControllerData(this.todosDal.getAll());
  }

  //TODO: Implement update
  update(payload: ITodoPayload, id: string): IControllerResult<Todo> {
    const {error, value} = validateTodoEditPayload(payload);
    if (error) {
      return newControllerError(error.details[0].message, 400);
    }
    console.log(newControllerData(this.todosDal.edit(value, id)));
    return newControllerData(this.todosDal.edit(value, id));
  }

  //TODO: Implement delete
  delete(id: string): IControllerResult<String> {
    const {error, data} = newControllerData(this.todosDal.delete(id));
    if (error) return newControllerError(error.errorMessage);
    return newControllerData("deleted");
  }

  orderTodos(orderArray: ITodoOrderPayload): IControllerResult<Todo[]> {
    console.log(orderArray)
    const { error, value } = validateTodoOrderPayload(orderArray);
    if (error) {
      return newControllerError(error.details[0].message, 400);
    }

    return newControllerData(this.todosDal.changeOrder(value));
  }
}

export const todosController = new TodosController(todosDal);
