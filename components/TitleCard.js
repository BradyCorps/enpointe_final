const TitleCard = () => {
	return (
		<div className='container'>
			<div className='post'>
				<div className='title-info-wrapper'>
					<div className='info'>
						<div className='text-wrapper'>
							<div className='title-description-wrapper'>
								<h1 className='title-h1'>
									<span className='en'>En</span>Pointe.
								</h1>
								<p className='title-card-description'>
									We invite you to sit back, relax and take a sneak peek at some
									exclusive content about our Company and School happenings
									along with community activities, coming attractions and other
									backstage news.
								</p>
							</div>
							<h4>February 2022 Edition</h4>
						</div>
					</div>
				</div>
				<div className='img-container'>
					<div className='img-solid-overlay'></div>
					<div className='img-gradient-overlay'></div>
					<img className='img' src={'/images/Header-bg.jpg'} alt='Test' />
				</div>
			</div>
		</div>
	);
};

export default TitleCard;
