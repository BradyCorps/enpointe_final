import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
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
					<Link href={`/stories/behind-the-scenes`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Behind the Scenes</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/more-behind-the-scenes`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>More Behind the Scenes</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/philanthropy-meets-aspirations`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Philanthropy Meets Aspirations…</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/creative-movement-comes-to-life-for-kids`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Creative Movement Comes to Life for Kids</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/living-the-unexpected-dream`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Living the Unexpected Dream…</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/ballet-in-the-park-retrospective`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Ballet in the Park Retrospective</h4>
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
