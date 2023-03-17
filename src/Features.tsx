import features from "./assets/features.jpeg";
function Features() {
	return (
		<div>
			<div className=" bg-slate-100">
				<div className="flex gap-24 items-center">
					<img src={features} alt="features" />
					<div>
						<h3 className="text-zinc-800 text-4xl font-black font-Montserrat ">
							Refer to out database for see your progrees in the App
						</h3>
						<p className="text-neutral-500 mr-36 my-7">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
							repellat dolorum esse molestiae odit similique sint quae
							reiciendis ex vero porro omnis praesentium error neque explicabo
							facere assumenda animi, quibusdam tenetur vitae.
						</p>
						<button className="bg-zinc-900 rounded-full px-7 text-neutral-100 py-2 active:bg-zinc-800">
							Get the App
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Features;
