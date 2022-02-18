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
				<h3 className='menu-title'>Browse Articles</h3>
			</div>
			<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='title-wrapper' onClick={showSidebar}>
					<Link href={`/stories/behind-the-scenes`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Behind the Scenes</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/the-sleeping-beauty-goes-digital`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>The Sleeping Beauty Goes Digital</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/the-rwb-takes-the-lead`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>The RWB Takes the LEAD</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/seizing-opportunity-of-a-lifetime`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Seizing the Opportunity of a Lifetime</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/going-home-star-journey-next-chapter`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>&ldquo;Going Home Star&rdquo; Journey - Next Chapter</h4>
							</li>
						</a>
					</Link>
					<Link
						href={`/stories/black-history-matters-look-listen-share-and-act`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>
									&ldquo;Black History Matters: Look, Listen, Share and
									Act&rdquo;
								</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/audition-from-anywhere-in-the-country`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Audition from anywhere in the country</h4>
							</li>
						</a>
					</Link>
					<Link href={`/`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Return Home</h4>
							</li>
						</a>
					</Link>

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
