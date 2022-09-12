import { Todo } from '@app/entities';
import { Injectable } from '@nestjs/common';

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
