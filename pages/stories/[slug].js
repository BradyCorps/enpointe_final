import Link from 'next/link';
import Layout from '@/components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';

import ReactMarkdown from 'react-markdown';

const StoryPage = ({ posts, pst }) => {
	const router = useRouter();

	return (
		<div>
			<Layout>
				<div className='container'>
					<div className='post'>
						<div className='info-wrapper'>
							<div className='postItem-description-wrapper'>
								<div className='title-name-size'>
									<h1>{pst.title}</h1>
								</div>
								<div className='read-more-align'>
									<p>{pst.description} </p>
									<div className='link'>
										<Link href='/stories'>
											<button className='main-button'>See More Stories</button>
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

				<ToastContainer />
				<div className='article-container'>
					<ReactMarkdown>{pst.body}</ReactMarkdown>

					<ReactMarkdown>{pst.paragraph2}</ReactMarkdown>
					<div className='image-feature-wrapper'>
						<div className='image-single-caption-wrapper'>
							<img
								className='article-feature-image'
								src={
									pst.secondFeature
										? pst.secondFeature.formats.large.url
										: pst.secondFeature.alternativeText
								}
								alt='Second Featured Image'
							/>
							<p className='caption'>{pst.secondFeature.caption}</p>
						</div>
						<div className='image-single-caption-wrapper'>
							<img
								className='article-feature-image'
								src={
									pst.thirdFeature
										? pst.thirdFeature.formats.large.url
										: './images/default.png'
								}
								alt='Third Featured Image'
							/>
							<p className='caption'>{pst.thirdFeature.caption}</p>
						</div>
					</div>

					<ReactMarkdown>{pst.paragraph3}</ReactMarkdown>

					<ReactMarkdown>{pst.paragraph4}</ReactMarkdown>
					<div className='image-feature-wrapper'>
						<div className='image-single-caption-wrapper'>
							<img
								className='article-feature-image'
								src={
									pst.fourthFeature
										? pst.fourthFeature.formats.large.url
										: pst.fourthFeature.alternativeText
								}
								alt='Second Featured Image'
							/>
							<p className='caption'>{pst.fourthFeature.caption}</p>
						</div>
						<div className='image-single-caption-wrapper'>
							<img
								className='article-feature-image'
								src={
									pst.fifthFeature
										? pst.fifthFeature.formats.large.url
										: './images/default.png'
								}
								alt=''
							/>
							<p className='caption'>{pst.fifthFeature.caption}</p>
						</div>
					</div>
					<ReactMarkdown>{pst.paragraph5}</ReactMarkdown>
					<ReactMarkdown>{pst.paragraph6}</ReactMarkdown>
					<div className='image-feature-wrapper'>
						<div className='image-single-caption-wrapper'>
							<img
								className='article-feature-image'
								src={
									pst.sixthFeature
										? pst.sixthFeature.formats.large.url
										: pst.sixthFeature.alternativeText
								}
								alt='Second Featured Image'
							/>
							<p className='caption'>{pst.sixthFeature.caption}</p>
						</div>
						<div className='image-single-caption-wrapper'>
							<img
								className='article-feature-image'
								src={
									pst.seventhFeature
										? pst.seventhFeature.formats.large.url
										: pst.seventhFeature.alternativeText
								}
								alt=''
							/>
							<p className='caption'>{pst.seventhFeature.caption}</p>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export async function getStaticPaths() {
	const res = await fetch(`${API_URL}/posts`);
	const posts = await res.json();

	const paths = posts.map(pst => ({
		params: { slug: pst.slug },
	}));
	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const res = await fetch(`${API_URL}/posts?slug=${slug}`);

	const stories = await res.json();
	return {
		props: {
			pst: stories[0],
		},
		revalidate: 1,
	};
}

// export async function getServerSideProps({ query: { slug } }) {
// 	const res = await fetch(`${API_URL}/api/posts/${slug}`);

// 	const stories = await res.json();
// 	return {
// 		props: {
// 			pst: stories[0],
// 		},
// 	};
// }
export default StoryPage;
