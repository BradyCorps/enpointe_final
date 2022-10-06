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
					<Link
						href={`/stories/rwb-brings-back-one-of-canadas-most-celebrated-literary-achievements-to-stage`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>
									RWB Brings Back One of Canada’s Most Celebrated Literary
									Achievements to Stage!
								</h4>
							</li>
						</a>
					</Link>
					<Link
						href={`/stories/centre-stage-with-professional-division-student-jane-du-and-her-mom-echo-wei`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>
									Centre Stage with Professional Division student Jane Du and
									her mom Echo Wei
								</h4>
							</li>
						</a>
					</Link>
					<Link
						href={`/stories/whats-the-buzz-about-the-new-season-for-the-recreational-division`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>
									What’s the Buzz about the New Season for the Recreational
									Division…
								</h4>
							</li>
						</a>
					</Link>
					<Link
						href={`/stories/why-more-canadians-are-leaving-a-gift-to-charity-in-their-wills`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>
									Why more Canadians are leaving a gift to charity in their
									Wills
								</h4>
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
