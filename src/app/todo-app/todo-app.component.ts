import { Component } from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';
import {MemoComponent} from './memo';

@Component({
	moduleId: module.id,
	selector: 'todo-app',
	templateUrl: 'todo-app.component.html',
	styleUrls: ['todo-app.component.css'],
	directives: [MemoComponent],
	providers: [TodoService]
})

export class TodoAppComponent {

	newTodo: Todo = new Todo();

	constructor(private todoService: TodoService) {}

	ngOnInit() {

	}

	addTodo() {
		this.todoService.addTodo(this.newTodo);
		this.newTodo = new Todo();
	}

	toggleTodoComplete(todo) {
		this.todoService.toggleTodoComplete(todo);
	}

	removeTodo(todo) {
		this.todoService.deleteTodoById(todo.id);
	}

	get todos() {
		return this.todoService.getAllTodos();
	}
}
