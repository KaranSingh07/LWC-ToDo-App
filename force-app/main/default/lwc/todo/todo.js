import { LightningElement, track } from 'lwc';

export default class Todo extends LightningElement {
	@track state = {
		newTaskName: '',
		tasks: [],
	};

	handleTaskInput(event) {
		this.newTaskName = event.detail.value; // this.newTaskName is calling the set newTaskName(value)
	}

	handleAddNewTask() {
		this.tasks.push(this.createTask());
		this.newTaskName = '';
	}

	createTask() {
		return {
			Id: this.tasks.length,
			Name: this.newTaskName,
		};
	}

	get newTaskName() {
		return this.state.newTaskName;
	}
	set newTaskName(value) {
		this.state.newTaskName = value;
	}

	get tasks() {
		return this.state.tasks;
	}

	get haveTasks() {
		return this.tasks && this.tasks.length > 0;
	}
}
