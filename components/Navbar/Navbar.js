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
				<div className='nav-title-wrapper'>
					<h3 className='menu-title'>Browse Articles</h3>
				</div>
				<div className='return-home'>
					<Link href={`/`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Return Home</h4>
							</li>
						</a>
					</Link>
				</div>
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

					<div className='button-wrapper'>
						<Link href='https://www.rwb.org/whats-on/'>
							<a className='nav-button' target='_blank' rel='noreferrer'>
								Coming Attractions
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
