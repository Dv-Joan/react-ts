import { useTodo } from "../context/Todo";

function Todo() {
	const { todos, dispatch } = useTodo();

	return (
		<div>
			{todos.map((todo) => {
				return (
					<div key={todo.id}>
						<div className="flex items-center justify-between my-5 mx-96">
							<h1 className=" text-neutral-100">{todo.title}</h1>
							<button
								onClick={() =>
									dispatch({
										type: "REMOVE_TODO",
										payload: todo,
									})
								}
								className="bg-zinc-900 rounded-full px-7 text-neutral-100 py-2 active:bg-zinc-800"
							>
								Remove
							</button>
						</div>
						<hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-25 dark:opacity-100" />
					</div>
				);
			})}
		</div>
	);
}

export default Todo;
