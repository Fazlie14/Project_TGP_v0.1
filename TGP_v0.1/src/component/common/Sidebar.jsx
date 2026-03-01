import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex flex-col bg-base-200 w-64 min-h-screen p-4">
      <ul className="menu w-full">
        <Link to='/dashboard'>Dashboard</Link>
       <Link to='/member'>Member</Link>
       
      </ul>
    </div>
  );
}

export default Sidebar;