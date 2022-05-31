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
					<Link href={`/stories/living-the-dream`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Living the Dream</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/illuminate-your-world`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Illuminate Your World</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/how-refreshing-how-on-the-edge`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>How Refreshing! How On The Edge!</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/discover-the-adult-summer-dance-difference`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Discover the Adult Summer Dance Difference!</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/finer-things-in-life`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Finer &ldquo;Things&rdquo; in Life...</h4>
							</li>
						</a>
					</Link>
					<Link
						href={`/stories/the-power-of-opportunity-to-change-young-lives`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>The Power of Opportunity to Change Young Lives</h4>
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
