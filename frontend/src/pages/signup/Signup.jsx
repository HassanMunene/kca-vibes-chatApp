import { useState } from 'react'
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup';

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullname: '',
		username: '',
		password: '',
		confirmPassword: '',
		gender: ''
	});
	//console.log(inputs);

	const handleCheckBoxChange = (gender) => {
		setInputs((prevInputs) => ({
			...prevInputs,
			gender: gender
		}))
	}

	const handleChange = (e) => {
		setInputs((prevInputs) => ({
			...prevInputs,
			[e.target.name]: e.target.value
		}));
	}

	// retrieve the loading and signup function from the custom hook
	const {loading, signup} = useSignup();
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(inputs);
		await signup(inputs);
	}
	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-600">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Sign Up
					<span className="text-yellow-500"> KcaVibes</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div className="fullnameContainer">
						<label className="label p-2">
							<span className="text-base label-text">Full Name</span>
						</label>
						<input 
							type="text" placeholder="Enter fullname"
							className="w-full input input-bordered h-10" 
							name="fullname" 
							value={inputs.fullname} 
							onChange={handleChange}
						/ >
					</div>
					<div className="usernameContainer">
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input 
							type="text" placeholder="Enter username"
							className="w-full input input-bordered h-10" 
							name="username" 
							value={inputs.username} 
							onChange={handleChange}
						/ >
					</div>
					<div className="passwordContainer">
						<label className="label p-2">
							<span className="text-base label-text">Password</span>
						</label>
						<input 
							type="password" placeholder="Enter password"
							className="w-full input input-bordered h-10" 
							name="password" 
							value={inputs.password} 
							onChange={handleChange}
						/ >
					</div>
					<div className="confirmPasswordContainer">
						<label className="label p-2">
							<span className="text-base label-text">Confirm password</span>
						</label>
						<input 
							type="password" placeholder="Confirm password"
							className="w-full input input-bordered h-10" 
							name="confirmPassword" 
							value={inputs.confirmPassword} 
							onChange={handleChange}
						/ >
					</div>
					<GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>
					<Link to="/login" className="text-sm hove:underline hover:text-yellow-600 mt-1 inline-block">
						Already have an account?
					</Link>
					<div>
						<button disable={loading} type="submit" className="btn btn-block mt-3 btn-md">
							{loading ? 'Signing up...' : 'Sign Up'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignUp;