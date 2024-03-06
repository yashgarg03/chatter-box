import Conversations from "./Conversations";
import Logout from "./Logout";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider p-1"></div>
      <Conversations/>
      <Logout />
    </div>
  );
};

export default Sidebar;
