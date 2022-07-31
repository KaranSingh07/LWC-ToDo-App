import { LightningElement, track, api } from 'lwc';

export default class Task extends LightningElement {
	@track state = {
		taskId: '',
		taskName: '',
	};

	@api set taskId(value) {
		this.state.taskId = value;
	}
	get taskId() {
		return this.state.taskId;
	}

	@api set taskName(value) {
		this.state.taskName = value;
	}
	get taskName() {
		return this.state.taskName;
	}

	handleDeleteTask() {
		this.dispatchEvent(
			new CustomEvent('deletetask', {
				detail: { taskId: this.taskId },
			})
		);
	}
}
