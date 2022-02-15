import Link from 'next/link';
import { useState } from 'react';

const Navbar = ({ posts }) => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<header className='nav-wrapper'>
			<div className='menu-wrapper'>
				<div className='menu-icon'>
					<input
						className='menu-icon-checkbox'
						type='checkbox'
						onClick={showSidebar}
					/>
					<div className='span-wrapper'>
						<span className='line'></span>
						<span className='line'></span>
					</div>
				</div>
				<h5 className='menu-title'>Browse Articles</h5>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='title-wrapper' onClick={showSidebar}>
					{posts.map(pst => (
						<Link key={pst.id} href={`/stories/${pst.slug}`}>
							<a className='link-style'>
								<li className='list-style'>
									<h4>{pst.title}</h4>
								</li>
							</a>
						</Link>
					))}
					<Link href={`/`}>
						<a className='link-style'>
							<li className='list-style'>
								<h7>Return Home</h7>
							</li>
						</a>
					</Link>
					<div className='button-wrapper'>
						<Link href='https://www.rwb.org/whats-on/'>
							<a className='nav-button' target='_blank' rel='noreferrer'>
								Whats On
							</a>
						</Link>
						<Link href='https://www.rwb.org/support/'>
							<a className='nav-button' target='_blank' rel='noreferrer'>
								Donate
							</a>
						</Link>
					</div>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
