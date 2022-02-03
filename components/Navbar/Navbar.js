import Link from 'next/link';
import React, { useState, useContext } from 'react';
import AuthContext from '@/context/AuthContext';

export default function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	const { user, logout } = useContext(AuthContext);
	return (
		<div className='nav-wrapper'>
			<div className='menu-wrapper'>
				<div className='menu-icon'>
					<input className='menu-icon-checkbox' type='checkbox' />
					<div className='span-wrapper' onClick={showSidebar}>
						<span className='line'></span>
						<span className='line'></span>
					</div>
				</div>
				<div className='authentication'>
					{user ? (
						// If Logged In
						<>
							{' '}
							<Link href='/stories/add'>
								<button className='auth-button'>Add Page</button>
							</Link>
							<Link href='/account/dashboard'>
								<button className='auth-button'>Dashboard</button>
							</Link>
							<button className='auth-button' onClick={() => logout()}>
								Logout
							</button>
						</>
					) : (
						// If Logged Out
						<>
							{' '}
							<Link href='/account/login'>
								<button className='auth-button'>Login</button>
							</Link>
						</>
					)}
				</div>
			</div>

			{/* <nav className={sidebar ? 'menu-icon-checkbox checked' : 'nav-menu'}>
				<ul className='li-wrapper'></ul>
			</nav> */}
		</div>
	);
}
