/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, FC } from 'react';
import { TaskRepositoryImpl as SupabaseTaskRepositoryImpl } from '../repositories/supabase/task.repository.impl';
import { TaskRepository } from '../repositories/task.repository';

export const taskRepository = new SupabaseTaskRepositoryImpl();

type ContextProps = {
	readonly taskRepository: TaskRepository;
};

export const RepositoryContext = createContext<ContextProps>({
	taskRepository,
});

const RepositoryProvider: FC = ({ children }) => (
	<RepositoryContext.Provider value={{ taskRepository }}>
		{children}
	</RepositoryContext.Provider>
);

export default RepositoryProvider;
