import SearchInputSection from "./SearchInputSection";
import ConversationsSection from "./ConversationsSection";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
	return (
		<div className="border-r border-slate-500 p-4 flex flex-col">
			<SearchInputSection/>
			<div className="divider divider-warning px-3"></div>
			<ConversationsSection/>
			<LogoutButton/>
		</div>
	)
}
export default Sidebar;