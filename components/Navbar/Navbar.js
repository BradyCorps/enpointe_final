import Link from 'next/link';
import React, { useState, useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import Search from '@/components/Search';

export default function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	const { user, logout } = useContext(AuthContext);
	return (
		<div className='nav-wrapper'>
			<div className='menu-icon'>
				<input className='menu-icon-checkbox' type='checkbox' />
				<div className='span-wrapper' onClick={showSidebar}>
					<span className='line'></span>
					<span className='line'></span>
				</div>
			</div>
			<Search />
			{user ? (
				// If Logged In
				<>
					{' '}
					<Link href='/stories/add'>
						<button>Add Page</button>
					</Link>
					<Link href='/account/dashboard'>
						<button>Dashboard</button>
					</Link>
					<div>
						<button onClick={() => logout()}>Logout</button>
					</div>
				</>
			) : (
				// If Logged Out
				<>
					{' '}
					<Link href='/account/login'>
						<button>Login</button>
					</Link>
				</>
			)}

			<nav className={sidebar ? 'menu-icon-checkbox checked' : 'nav-menu'}>
				<ul className='li-wrapper'>
					<li>Test</li>
				</ul>
			</nav>
		</div>
	);
}
