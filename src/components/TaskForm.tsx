import {
	Button,
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	VStack,
} from '@chakra-ui/react';
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
			<VStack spacing={4} align="stretch">
				<FormControl>
					<FormLabel id="title-label" htmlFor="title">
						Title
					</FormLabel>
					<Input
						id="title"
						{...register('title')}
						aria-describedby="title-helpertext"
					/>
					<FormHelperText id="title-helpertext">
						Title is required.
					</FormHelperText>
				</FormControl>
				<FormControl>
					<FormLabel id="description-label" htmlFor="description">
						Description
					</FormLabel>
					<Input
						id="description"
						{...register('description')}
						aria-describedby="description-helpertext"
					/>
					<FormHelperText id="description-helpertext">
						Description is optional.
					</FormHelperText>
				</FormControl>
				<Button type="submit" colorScheme="teal" aria-labelledby="登録">
					登録
				</Button>
			</VStack>
		</form>
	);
};
