const Login = () => {
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-600">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Login
					<span className="text-yellow-500"> KcaVibes</span>
				</h1>
				<form>
					<div className="usernameContainer">
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input 
							type="text" placeholder="Enter username"
							className="w-full input input-bordered h-10"
						/ >
					</div>
					<div className="passwordContainer">
						<label className="label p-2">
							<span className="text-base label-text">Password</span>
						</label>
						<input 
							type="password" placeholder="Enter password"
							className="w-full input input-bordered h-10"
						/ >
					</div>
					<a href="#" className="text-sm hove:underline hover:text-yellow-600 mt-2 inline-block">
						Dont have an account?
					</a>
					<div>
						<button className="btn btn-block mt-3 btn-md">Login</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login;