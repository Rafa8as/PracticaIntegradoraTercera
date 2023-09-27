const roleAuth = (role) => {
	return async (req, res, next) => {
		const { user } = req.session;
		if (!user || req.role !== role) 
			return res.status(403).json({ status: 'Error', message: `Forbidden : You don´t have permission to access` });
			next();
		};

		

};

export default roleAuth;