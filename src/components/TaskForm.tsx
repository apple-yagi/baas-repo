import {
	Button,
	FormControl,
	FormErrorMessage,
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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TaskInput>();
	const onSubmit: SubmitHandler<TaskInput> = (data) => submit(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<VStack spacing={4} align="stretch">
				<FormControl isInvalid={Boolean(errors.title)}>
					<FormLabel id="title-label" htmlFor="title">
						Title
					</FormLabel>
					<Input
						id="title"
						{...register('title', {
							required: true,
							minLength: 4,
							maxLength: 50,
						})}
					/>
					{errors.title &&
						(errors.title.type === 'required' ? (
							<FormErrorMessage>必須項目です</FormErrorMessage>
						) : errors.title.type === 'minLength' ? (
							<FormErrorMessage>4文字以上入力してください</FormErrorMessage>
						) : (
							<FormErrorMessage>50文字以内で入力してください</FormErrorMessage>
						))}
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
