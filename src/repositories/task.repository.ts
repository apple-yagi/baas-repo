/* eslint-disable no-unused-vars */
import { CreateTask, Task } from '../types';

export interface TaskRepository {
	getTasks: () => Promise<Task[]>;
	storeTask: (task: CreateTask) => Promise<string>;
}
