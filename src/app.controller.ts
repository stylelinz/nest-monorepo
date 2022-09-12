import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TodosService } from './todos/todos.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly todosService: TodosService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('todos')
  getTodos() {
    return this.todosService.getTodo();
  }
}
