import Link from 'next/link';

const PostItem = ({ pst }) => {
	return (
		<div className='container'>
			<div className='post'>
				<div className='info-wrapper'>
					<div className='story-title-wrapper'>
						<h1>{pst.title}</h1>
					</div>
					<div className='description-wrapper'>
						<p>{pst.description}</p>
						<Link href={`/stories/${pst.slug}`}>
							<a className='date-align'>Read More</a>
						</Link>
					</div>
				</div>
				<div className='img-container'>
					<div className='img-solid-overlay'></div>
					<div className='img-gradient-overlay'></div>
					<img
						className='img'
						src={
							pst.mainImage
								? pst.mainImage.formats.large.url
								: './images/default.png'
						}
						alt='Test'
					/>
				</div>
			</div>
		</div>
	);
};

export default PostItem;
