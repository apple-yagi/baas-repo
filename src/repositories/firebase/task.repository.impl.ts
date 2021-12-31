import dayjs from 'dayjs';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { CreateTask, Task } from '../../types';
import { TaskRepository } from '../task.repository';
import { db } from './firebase';

export class TaskRepositoryImpl implements TaskRepository {
	async getTasks() {
		const querySnapshot = await getDocs(collection(db, 'tasks'));
		return querySnapshot.docs.map(
			(doc) =>
				({
					...doc.data(),
					createdAt: `${dayjs(doc.data().createdAt.toDate()).format(
						'YYYY-MM-DDTHH:mm'
					)}`,
				} as Task)
		);
	}

	async storeTask(task: CreateTask) {
		await setDoc(doc(db, 'tasks', task.id), {
			...task,
			done: false,
			createdAt: new Date(),
		});
		return task.id;
	}
}
