import {
	TodoStructure,
	TodoState,
	TodoAction,
	initialTodos,
} from "../types/Todo";
import { createContext, useReducer, useContext } from "react";

const TodoContext = createContext<{
	todos: TodoStructure[];
	dispatch: React.Dispatch<TodoAction>;
}>({
	todos: initialTodos,
	dispatch: () => null,
});

const todoReducer = (state: TodoState, action: TodoAction) => {
	switch (action.type) {
		case "ADD_TODO":
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case "REMOVE_TODO":
			return {
				...state,
				todos: state.todos.filter((todo) =>
					todo.id !== action.payload ? todo.id : null,
				),
			};
		default:
			return state;
	}
};

export const TodoProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(todoReducer, { todos: [] });

	return (
		<TodoContext.Provider value={{ todos: state.todos, dispatch }}>
			{children}
		</TodoContext.Provider>
	);
};

export const useTodo = () => useContext(TodoContext);
