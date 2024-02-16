import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({userId: userId}, process.env.JWT_SECRET, {
		expiresIn: '15d'
	})

	res.cookie("jwt_token", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, //millseconds
		httpOnly: true, //prevent access as attacks
		sameSite: "strict",
		secure: process.env.NODE_ENV !== 'development'
	})
}

export default generateTokenAndSetCookie;