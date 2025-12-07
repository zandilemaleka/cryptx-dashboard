const Sidebar = () => {
  const menuItems = [
    { name: "Client", icon: "👤" },
    { name: "Transactions", icon: "💳" },
    { name: "Viollet", icon: "💰" },
    { name: "Med Flow", icon: "🔄" },
    { name: "Setting", icon: "⚙️" },
    { name: "Logout", icon: "🚪" },
  ];

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">CryptX</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <button className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-700">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
