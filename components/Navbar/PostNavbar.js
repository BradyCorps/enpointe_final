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
					<Link href={`/stories/nutcracker-takes-centre-stage`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Nutcracker Takes Centre Stage</h4>
							</li>
						</a>
					</Link>
					<Link
						href={`/stories/recreational-division-students-pumped-for-nutcracker`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Recreational Division Students Pumped for Nutcracker</h4>
							</li>
						</a>
					</Link>
					<Link
						href={`/stories/the-professional-division-delivers-10-performances-to-10-schools-in-five-days`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>
									The Professional Division Delivers 10 Performances to 10
									Schools in Five Days
								</h4>
							</li>
						</a>
					</Link>
					<Link
						href={`/stories/evelyn-hart-dance-collection-danse-hall-of-fame`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Evelyn Hart: Dance Collection Danse Hall of Fame</h4>
							</li>
						</a>
					</Link>
					<Link
						href={`/stories/powerful-leadership-legacy-of-queen-elizabeth-ii`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Powerful Leadership Legacy of Queen Elizabeth II</h4>
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
