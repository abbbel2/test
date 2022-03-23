export interface Todo {
  _id: string;
  text: string;
  completed: boolean;
}

export interface ITodoPayload {
  text: string;
  completed: boolean;
}

export interface ITodoOrderPayload {
  ids: string[]
}
