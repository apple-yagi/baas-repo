import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { MdCheckCircle, MdOutlineCircle } from 'react-icons/md';
import { Task } from '../types';

interface Props {
	tasks: Task[];
}

export const TaskList = ({ tasks }: Props) => (
	<List spacing={3}>
		{tasks.map((task) => (
			<ListItem key={task.id}>
				<ListIcon
					as={task.done ? MdCheckCircle : MdOutlineCircle}
					color="green.500"
				/>
				{task.title}
			</ListItem>
		))}
	</List>
);
