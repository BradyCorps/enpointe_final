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
					<Link
						href={`/stories/ballet-meets-broadway-in-val-caniparolis-a-cinderella-story`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>
									&ldquo;Ballet Meets Broadway"&rdquo; in Val Caniparoli's A
									Cinderella Story
								</h4>
							</li>
						</a>
					</Link>
					<Link href={`/stories/spring-events-showcase-exceptional-talent`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Spring Events Showcase Exceptional Talent</h4>
							</li>
						</a>
					</Link>
					<Link
						href={`/stories/spotlight-on-laurencia-and-canadian-dance-luminary`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Spotlight on Laurencia – and Canadian Dance Luminary</h4>
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
					<Link href={`/stories/bid-it-to-win-it-at-ballet-ball-auction`}>
						<a className='link-style'>
							<li className='list-style'>
								<h4>Bid it to Win it at Ballet Ball Auction</h4>
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
