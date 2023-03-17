export type TodoStructure = {
	id: string;
	title: string;
	completed: boolean;
};
export const initialTodos: TodoStructure[] = [
	{
		id: "1",
		title: "Clen my room",
		completed: false,
	},
	{
		id: "2",
		title: "Read the Clean Code book",
		completed: false,
	},
	{
		id: "4",
		title: "Clen my room",
		completed: false,
	},
	{
		id: "5",
		title: "Read the Clean Code book",
		completed: false,
	},
];

export interface TodoState {
	todos: TodoStructure[];
}

export interface TodoAction {
	type: string;
	payload: TodoStructure;
}
