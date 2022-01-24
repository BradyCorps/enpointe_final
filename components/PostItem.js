import Link from 'next/link';

const PostItem = ({ pst }) => {
	// const {attributes} = pst
	return (
		<div className='container'>
			<div className='post'>
				<div className='info-wrapper'>
					<div className='postItem-description-wrapper'>
						<div className='title-name-size'>
							<h1>{pst.name}</h1>
						</div>
						<div className='read-more-align'>
							<p>{pst.description} </p>
							<div className='link'>
								<Link href={`/api/posts/${pst.slug}`}>
									<a className='read-more'>Read More</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='img-container'>
					<div className='img-solid-overlay'></div>
					<div className='img-gradient-overlay'></div>

					<img
						className='img'
						src={pst.image ? pst.image : './images/default.png'}
						alt='Test'
					/>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
