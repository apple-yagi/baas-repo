export type Task = {
	id: string;
	title: string;
	description: string;
	done: boolean;
	createdAt: Date;
};

export type CreateTask = {
	id: string;
	title: string;
	description?: string;
};
