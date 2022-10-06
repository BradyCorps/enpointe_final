import Link from 'next/link';
import Layout from '@/components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '@/config/index';
import ReactMarkdown from 'react-markdown';
import PostNavbar from '@/components/Navbar/PostNavbar';
import { SRLWrapper } from 'simple-react-lightbox';

const StoryPage = ({ posts, pst }) => {
	// const options = {
	// 	buttons: {
	// 		iconColor: '#f5f5f5',
	// 		iconPadding: '10px',
	// 	},
	// 	caption: {
	// 		captionColor: '#ffffff',
	// 		captionFontSize: '20px',
	// 		captionFontStyle: 'italic',
	// 	},
	// 	settings: {
	// 		overlayColor: '#202529',
	// 	},
	// 	thumbnails: {
	// 		thumbnailsAlignment: 'center',
	// 		showThumbnails: true,
	// 		thumbnailsContainerBackgroundColor: 'transparent',
	// 		thumbnailsContainerPadding: '0',
	// 		thumbnailsGap: '0 1px',
	// 		thumbnailsIconColor: '#ffffff',
	// 		thumbnailsOpacity: 0.4,
	// 		thumbnailsPosition: 'bottom',
	// 		thumbnailsSize: ['100px', '80px'],
	// 	},
	// 	progressBar: {
	// 		backgroundColor: '#f2f2f2',
	// 		fillColor: '#000000',
	// 		height: '3px',
	// 		showProgressBar: true,
	// 	},
	// };
	return (
		<Layout>
			<PostNavbar />
			<div className='container'>
				<div className='post'>
					<div className='info-wrapper'>
						<div className='story-title-wrapper'>
							<h1>{pst.title}</h1>
						</div>
						<div className='description-wrapper'>
							<p>{pst.description}</p>
						</div>
					</div>
					<div className='img-container'>
						<div className='img-solid-overlay'></div>
						<div className='img-gradient-overlay'></div>
						<img
							className='img'
							src={
								pst.mainImage.formats.large == 'undefined'
									? pst.mainImage.formats.large.url
									: pst.mainImage.url
							}
							alt='Test'
						/>
					</div>
				</div>
			</div>

			<ToastContainer />

			<div className='article-container'>
				{/* <div className='carousel'>
					<div className='carousel-header-wrapper'>
						<img
							className='carousel-header-img'
							src={pst.Carousel[0].url}
							alt={pst.Carousel[0].alternaiveText}></img>
					</div>
					<SRLWrapper options={options}>
						<div className='carousel-wrapper'>
							{pst.Carousel.map(caro => (
								<a href={caro.url}>
									<img
										className='carousel-thumbnail-style'
										src={caro.url}
										alt={caro.alternativeText}
										key={caro.id}
									/>
								</a>
							))}
						</div>
					</SRLWrapper>
				</div> */}

				<ReactMarkdown>{pst.body}</ReactMarkdown>

				<ReactMarkdown>{pst.paragraph2}</ReactMarkdown>
				<div className='image-feature-wrapper'>
					<div className='image-single-caption-wrapper'>
						{pst.secondFeature == null ? (
							''
						) : (
							<>
								<img
									className='article-feature-image'
									src={
										pst.secondFeature == 'undefined'
											? ''
											: pst.secondFeature.url
									}
									alt={
										pst.secondFeature == 'undefined'
											? pst.secondFeature.alternaiveText
											: ''
									}
								/>
								<p className='caption'>
									{pst.caption == 'undefined' ? '' : pst.secondFeature.caption}
								</p>
							</>
						)}
					</div>
					<div className='image-single-caption-wrapper'>
						{pst.thirdFeature == null ? (
							''
						) : (
							<>
								<img
									className='article-feature-image'
									src={
										pst.thirdFeature.formats.large == 'undefined'
											? ''
											: pst.thirdFeature.url
									}
									alt={
										pst.thirdFeature == 'undefined'
											? pst.thirdFeature.alternaiveText
											: ''
									}
								/>
								<p className='caption'>
									{pst.caption == 'undefined' ? '' : pst.thirdFeature.caption}
								</p>
							</>
						)}
					</div>
				</div>

				<ReactMarkdown>{pst.paragraph3}</ReactMarkdown>

				<ReactMarkdown>{pst.paragraph4}</ReactMarkdown>
				<div className='image-feature-wrapper'>
					<div className='image-single-caption-wrapper'>
						{pst.fourthFeature == null ? (
							''
						) : (
							<>
								<img
									className='article-feature-image'
									src={
										pst.fourthFeature == 'undefined'
											? ''
											: pst.fourthFeature.url
									}
									alt={
										pst.fourthFeature == 'undefined'
											? pst.fourthFeature.alternaiveText
											: ''
									}
								/>
								<p className='caption'>
									{pst.caption == 'undefined' ? '' : pst.fourthFeature.caption}
								</p>
							</>
						)}
					</div>
					<div className='image-single-caption-wrapper'>
						{pst.fifthFeature == null ? (
							''
						) : (
							<>
								<img
									className='article-feature-image'
									src={
										pst.fifthFeature == 'undefined' ? '' : pst.fifthFeature.url
									}
									alt={
										pst.fifthFeature == 'undefined'
											? pst.fifthFeature.alternaiveText
											: ''
									}
								/>
								<p className='caption'>
									{pst.caption == 'undefined' ? '' : pst.fifthFeature.caption}
								</p>
							</>
						)}
					</div>
				</div>
				<ReactMarkdown>{pst.paragraph5}</ReactMarkdown>

				<ReactMarkdown className='workaround'>{pst.paragraph6}</ReactMarkdown>

				<div className='image-feature-wrapper'></div>
				<Link href={`/stories`}>
					<button className='main-button'>See More Stories</button>
				</Link>
			</div>
		</Layout>
	);
};

// export async function getStaticPaths() {
// 	const res = await fetch(`${API_URL}/posts`);
// 	const posts = await res.json();

// 	const paths = posts.map(pst => ({
// 		params: { slug: pst.slug },
// 	}));

// 	return {
// 		paths,
// 		fallback: true,
// 	};
// }

// export async function getStaticProps({ params: { slug } }) {
// 	const res = await fetch(`${API_URL}/posts?slug=${slug}`);

// 	const stories = await res.json();
// 	return {
// 		props: {
// 			pst: stories[0],
// 		},
// 		revalidate: 1,
// 	};
// }

export async function getServerSideProps({ query: { slug } }) {
	const res = await fetch(`${API_URL}/posts?slug=${slug}`);

	const stories = await res.json();

	return {
		props: {
			pst: stories[0],
		},
	};
}

export default StoryPage;
