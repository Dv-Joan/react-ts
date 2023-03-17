import React from "react";
import { useTodo } from "../context/Todo";
import { v4 as uuidv4 } from "uuid";
function TodoForm() {
	const { dispatch } = useTodo();

	return (
		<div className="border-[1px] m-16 border-neutral-400 rounded-lg ml-96">
			<div className="flex gap-2 m-16 items-center justify-between">
				<input
					type="text"
					className="border-[1px] border-neutral-300 text-neutral-500 mx-5 rounded-full px-7 py-2 w-96"
					placeholder="What needs to be done?"
				/>
				<button
					onClick={() =>
						dispatch({
							type: "ADD_TODO",
							payload: {
								id: uuidv4(),
								title: "Todo 1",
								completed: false,
							},
						})
					}
					className="bg-zinc-900 rounded-full px-7 text-neutral-100 py-2 active:bg-zinc-800"
				>
					Add
				</button>
			</div>
		</div>
	);
}

export default TodoForm;
