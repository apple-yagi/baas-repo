/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, FC } from 'react';
import { TaskRepositoryImpl as SupabaseTaskRepositoryImpl } from '../repositories/supabase/task.repository.impl';
import { TaskRepositoryImpl as FirebaseTaskRepositoryImpl } from '../repositories/firebase/task.repository.impl';
import { TaskRepository } from '../repositories/task.repository';
import { BAAS_MODE } from '../constants';

export const taskRepository =
	BAAS_MODE === 'supabase'
		? new SupabaseTaskRepositoryImpl()
		: new FirebaseTaskRepositoryImpl();

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
