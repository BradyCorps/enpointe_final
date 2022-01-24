import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);
	return (
		<div className='nav-wrapper'>
			<div className='menu-icon'>
				<input className='menu-icon-checkbox' type='checkbox' />
				<div className='span-wrapper' onClick={showSidebar}>
					<span className='line'></span>
					<span className='line'></span>
				</div>
			</div>
			<nav className={sidebar ? 'menu-icon-checkbox checked' : 'nav-menu'}>
				<ul className='li-wrapper'>
					<li>Test</li>
					<li>Test</li>
					<li>Test</li>
					<li>Test</li>
					<li>Test</li>
				</ul>
			</nav>
		</div>
	);
}
