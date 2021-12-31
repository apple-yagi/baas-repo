export type Task = {
	id: string;
	title: string;
	description: string;
	done: boolean;
	createdAt: string;
};

export type CreateTask = {
	id: string;
	title: string;
	description?: string;
};
