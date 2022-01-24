const { posts } = require('./data.json');

export default function handler(req, res) {
	const pst = posts.filter(ps => ps.slug == req.query.slug);

	if (req.method === 'GET') {
		res.status(200).json(pst);
	} else {
		res.setHeader('Allow', [GET]);
		res.status(405).json({ message: `Method${req.method} is not allowed` });
	}
}
