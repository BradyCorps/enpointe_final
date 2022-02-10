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
					<Link href={`/stories/behind-the-scenes`}>
						<a className='link-style'>
							<li className='list-style'>
								<h7>Behind the Scenes</h7>
							</li>
						</a>
					</Link>
					<Link href={`/stories/the-sleeping-beauty-goes-digital`}>
						<a className='link-style'>
							<li className='list-style'>
								<h7>The Sleeping Beauty Goes Digital</h7>
							</li>
						</a>
					</Link>
					<Link href={`/stories/the-rwb-takes-the-lead`}>
						<a className='link-style'>
							<li className='list-style'>
								<h7>The RWB Takes the LEAD</h7>
							</li>
						</a>
					</Link>
					<Link href={`/stories/seizing-the-opportunity-of-a-lifetime`}>
						<a className='link-style'>
							<li className='list-style'>
								<h7>Seizing the Opprotunity of a Lifetime</h7>
							</li>
						</a>
					</Link>
					<Link href={`/stories/going-home-star-journey-next-chapter`}>
						<a className='link-style'>
							<li className='list-style'>
								<h7>&ldquo;Going Home Star&rdquo; Journey - Next Chapter</h7>
							</li>
						</a>
					</Link>
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
