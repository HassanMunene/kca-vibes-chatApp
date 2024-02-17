import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/messages/MessageContainer";
const HomePage = () => {
	return (
		<div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-600 shadow-md">
			<Sidebar/>
			<MessageContainer/>
		</div>
	)
}

export default HomePage;