import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect, useContext } from 'react';
import AuthContext, { AuthProvider } from '@/context/AuthContext';
import Link from 'next/link';
import Layout from '@/components/Layout';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { login, error } = useContext(AuthContext);

	const handleSubmit = e => {
		e.preventDefault();
		login({ email, password });
	};
	return (
		<Layout title='Dev Login'>
			<div className='auth-wrapper'>
				<div className='auth'>
					<h2>User Login</h2>
					<ToastContainer />
					<form onSubmit={handleSubmit}>
						<div>
							<label htmlFor='email'>Email Address</label>
							<input
								type='email'
								id='email'
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<input type='submit' value='Login' className='btn' />
					</form>
				</div>
			</div>
		</Layout>
	);
};

export default LoginPage;
