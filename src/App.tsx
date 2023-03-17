import codifyerLogo from "../public/codifyer.png";
import banner from "./assets/banner.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Features from "./Features";
import About from "./About";
function App() {
	return (
		<div className="App mt-2">
			<header className="flex gap-2 items-center justify-between">
				<div className="flex gap-2 ml-10 items-center">
					<img src={codifyerLogo} alt="logo" />
					<h2 className="text-xl">Codifyer.</h2>
				</div>

				<div className="mx-20">
					<nav>
						<ul className="flex gap-48">
							<div className="flex gap-20 text-neutral-400 items-center">
								<li className="hover:text-neutral-300 cursor-pointer">About</li>
								<li className="hover:text-neutral-300 cursor-pointer">
									Features
								</li>

								<li className="hover:text-neutral-300 cursor-pointer">Blog</li>

								<li className="hover:text-neutral-300 cursor-pointer">
									Contact
								</li>
							</div>
							<div className="flex gap-3 items-center justify-end">
								<button className="border-[1px] border-neutral-100 active:bg-zinc-700 rounded-full px-7 py-2">
									Login
								</button>
								<button className="bg-neutral-100 rounded-full px-5 text-zinc-800 py-2 active:bg-neutral-100/90">
									Get the App
								</button>
							</div>
						</ul>
					</nav>
				</div>
			</header>
			<main>
				<div className="justify-between flex">
					<div className="flex flex-col gap-5 my-48 ml-20">
						<h1 className="text-5xl font-bold font-Montserrat">
							Turn code into <br /> collaboration!
						</h1>
						<p className="text-neutral-400">
							Unlock the power of your code and share it with <br /> the world,
							all on one seamless platform.
						</p>
						<div className="flex gap-3">
							<button className="bg-neutral-100 rounded-full px-7 text-zinc-800 py-2 active:bg-neutral-100/90">
								Get the App
							</button>
							<button className="border-[1px] border-neutral-100 active:bg-zinc-700 rounded-full px-7 py-2">
								Get free month
							</button>
						</div>
					</div>
					<div className="">
						<img src={banner} alt="banner" />
					</div>
				</div>
			</main>
			<Features />
			<About />
		</div>
	);
}

export default App;
