function Sidebar() {
  return (
    <div className="flex flex-col bg-base-200 w-64 min-h-screen p-4">
      <ul className="menu w-full">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/dashboard/members">Members</a></li>
        <li><a href="/dashboard/settings">Settings</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;