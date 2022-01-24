const TitleCard = () => {
	return (
		<div className='container'>
			<div className='post'>
				<div className='info-wrapper'>
					<div className='info'>
						<div className='text-wrapper'>
							<div className='title-description-wrapper'>
								<h1 className='title-h1'>
									<span className='en'>En</span>Pointe.
								</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Debitis aperiam molestiae nostrum vitae eveniet vero
									temporibus quidem architecto illo at molestias, voluptates
									ducimus quisquam? Cumque adipisci nulla, vero similique
									aliquam suscipit rerum dolorum. Consequuntur a reiciendis,
									molestias distinctio laborum quidem.
								</p>
							</div>
							<h4 className='date-align'>January 2022</h4>
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
