import { SubmitHandler, useForm } from 'react-hook-form';

export interface TaskInput {
	title: string;
	description: string;
}

interface Props {
	// eslint-disable-next-line no-unused-vars
	submit: (taskInput: TaskInput) => void;
}

export const TaskForm = ({ submit }: Props) => {
	const { register, handleSubmit } = useForm<TaskInput>();
	const onSubmit: SubmitHandler<TaskInput> = (data) => submit(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>Title</label>
			<input {...register('title')} />
			<label>Description</label>
			<input {...register('description')} />
			<button type="submit">登録</button>
		</form>
	);
};
