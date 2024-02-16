import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const conversationSchema = new Schema({
	participants: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		}
	],
	messages: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Message",
		}
	]
}, {timestamps: true})

const Conversation = model("Conversation", conversationSchema);
export default Conversation;