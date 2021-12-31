import { CreateTask, Task } from '../../types';
import { TaskRepository } from '../task.repository';
import { supabase } from './supabase';

export class TaskRepositoryImpl implements TaskRepository {
	async getTasks() {
		const { data, error } = await supabase.from<Task>('Task').select();
		if (error) throw error;

		return data || [];
	}

	async storeTask(task: CreateTask) {
		const { data, error } = await supabase.from<Task>('Task').insert(task);
		if (error) throw error;
		if (!data) throw new Error('return data is null');

		return data[0].id;
	}
}
