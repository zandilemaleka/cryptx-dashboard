import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-2">Content will go here</p>
      </main>
    </div>
  );
}

export default App;
