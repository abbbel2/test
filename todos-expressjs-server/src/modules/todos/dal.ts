import { todosArray } from '../../config/db';
import { ITodoOrderPayload, ITodoPayload, Todo } from './model';
import { uuid } from 'uuidv4';
import _ from 'lodash';

export class TodosDal {
  todosArray: Todo[];

  constructor(todosArray: Todo[]) {
    this.todosArray = todosArray;
  }

  create(payload: ITodoPayload): Todo {
    const newTodo: Todo = {
      _id: uuid(),
      ...payload,
    };
    this.todosArray.push(newTodo);

    return newTodo;
  }

  edit(payload: ITodoPayload, id: string): Todo {
    const editedTodo: Todo = {
      _id: id,
      ...payload,
    };
    const todoIndex = _.findIndex(this.todosArray, { _id: id });

    if (todoIndex != -1) this.todosArray[todoIndex] = editedTodo;

    return editedTodo;
  }

  getAll(): Todo[] {
    return this.todosArray;
  }

  getOne(id: string): Todo {
    return _.find(this.todosArray, { _id: id });
  }

  delete(id: string) {
    _.remove(this.todosArray, { _id: id });
  }

  changeOrder(orderArray: ITodoOrderPayload):Todo[]  {
    const newTodo: Todo[] = orderArray.ids.map((order) => {
      const item = this.todosArray.find((todo) => todo._id === order);
      return item;
    });
    return newTodo;

  }
}

export const todosDal = new TodosDal(todosArray);
