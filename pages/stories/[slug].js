import Link from 'next/link';
import Layout from '@/components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '@/config/index';
import ReactMarkdown from 'react-markdown';
import PostNavbar from '@/components/Navbar/PostNavbar';

const StoryPage = ({ pst }) => {
	// const imagerender = () => {
	// 	if (
	// 		pst.secondFeature ||
	// 		pst.thirdFeature ||
	// 		pst.fourthFeature ||
	// 		pst.fifthFeature ||
	// 		pst.sixthFeature ||
	// 		pst.seventhFeature == 'null'
	// 	) {
	// 		return <></>;
	// 	} else {
	// 		return pst.secondFeature.formats.large.url;
	// 	}
	// };
	return (
		<div>
			<PostNavbar />
			<Layout>
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
										: pst.mainImage.formats.medium.url
								}
								alt='Test'
							/>
						</div>
					</div>
				</div>

				<ToastContainer />
				<div className='article-container'>
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
												: pst.secondFeature.formats.large.url ||
												  pst.secondFeature.formats.small.url
										}
										alt={
											pst.secondFeature == 'undefined'
												? pst.secondFeature.alternaiveText
												: ''
										}
									/>
									<p className='caption'>
										{pst.caption == 'undefined'
											? ''
											: pst.secondFeature.caption}
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
											pst.thirdFeature == 'undefined'
												? ''
												: pst.thirdFeature.formats.large.url ||
												  pst.thirdFeature.formats.small.url
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
												: pst.fourthFeature.formats.large.url ||
												  pst.fourthFeature.formats.small.url
										}
										alt={
											pst.fourthFeature == 'undefined'
												? pst.fourthFeature.alternaiveText
												: ''
										}
									/>
									<p className='caption'>
										{pst.caption == 'undefined'
											? ''
											: pst.fourthFeature.caption}
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
											pst.fifthFeature == 'undefined'
												? ''
												: pst.fifthFeature.formats.large.url ||
												  pst.fifthFeature.formats.small.url
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

					<div className='image-feature-wrapper'>
						<div className='image-single-caption-wrapper'>
							{pst.sixthFeature == null ? (
								''
							) : (
								<>
									<img
										className='article-feature-image'
										src={
											pst.sixthFeature == 'undefined'
												? ''
												: pst.sixthFeature.formats.large.url ||
												  pst.sixthFeature.formats.small.url
										}
										alt={
											pst.sixthFeature == 'undefined'
												? pst.sixthFeature.alternaiveText
												: ''
										}
									/>
									<p className='caption'>
										{pst.caption == 'undefined' ? '' : pst.sixthFeature.caption}
									</p>
								</>
							)}
						</div>
						<div className='image-single-caption-wrapper'>
							{pst.seventhFeature == null ? (
								''
							) : (
								<>
									<img
										className='article-feature-image'
										src={
											pst.seventhFeature == 'undefined'
												? ''
												: pst.seventhFeature.formats.large.url ||
												  pst.seventhFeature.formats.small.url
										}
										alt={
											pst.seventhFeature == 'undefined'
												? pst.seventhFeature.alternaiveText
												: ''
										}
									/>
									<p className='caption'>
										{pst.caption == 'undefined'
											? ''
											: pst.seventhFeature.caption}
									</p>
								</>
							)}
						</div>
					</div>
					<Link href={`/stories`}>
						<button className='main-button'>See More Stories</button>
					</Link>
				</div>
			</Layout>
		</div>
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
