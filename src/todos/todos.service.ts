import { Injectable } from '@nestjs/common';

type Todo = {
  message: string;
  done: boolean;
};

const todos: Todo[] = [
  {
    message: 'work out',
    done: false,
  },
  {
    message: 'watch a page of DDIA',
    done: false,
  },
];

@Injectable()
export class TodosService {
  getTodo() {
    return todos;
  }
}
