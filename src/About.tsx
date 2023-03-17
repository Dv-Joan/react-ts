import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function About() {
	return (
		<div>
			<div>
				<div className="flex gap-24 items-center">
					<TodoForm />
				</div>
				<div>
					<Todo />
				</div>
			</div>
		</div>
	);
}

export default About;
