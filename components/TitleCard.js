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
									Journey into the Royal Winnipeg Ballet and read candid
									interviews, see exclusive content and stay up to date with all
									things RWB.
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
