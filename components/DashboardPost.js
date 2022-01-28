import Link from 'next/link';

const DashboardEvent = ({ pst, handleDelete }) => {
	return (
		<div className='dash-post'>
			<h4>
				<Link href={`/stories/${pst.slug}`}>
					<a>{pst.title}</a>
				</Link>
			</h4>
			<Link href={`/stories/edit/${pst.id}`}>
				<a className='edit'>Edit</a>
			</Link>
			<a href='#' className='delete' onClick={() => handleDelete(pst.id)}>
				Delete
			</a>
		</div>
	);
};

export default DashboardEvent;
