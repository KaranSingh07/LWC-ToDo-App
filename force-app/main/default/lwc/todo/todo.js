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

	handleDeleteTask(event) {
		const taskId = event.detail.taskId;
		this.tasks = this.tasks.filter((task) => {
			return task.TaskId !== taskId;
		});
	}

	createTask() {
		return {
			TaskId: this.tasks.length,
			TaskName: this.newTaskName,
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
	set tasks(value) {
		this.state.tasks = value;
	}

	get haveTasks() {
		return this.tasks && this.tasks.length > 0;
	}
}
