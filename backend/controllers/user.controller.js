import User from '../models/user.model.js';

export const getUsersForSideBar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;

		const allFilteredUsers = await User.find({
			_id: { $ne: loggedInUserId }
		}).select("-password");
		res.status(200).json(allFilteredUsers);

	} catch(error) {
		console.log("error in getUsersForSideBar controller", error.message);
		res.status(500).json({error: "Internal Server Error"});
	}
}