import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="ml-[263px] flex-1 p-8">
        <Header />
        <div className="text-center py-16 text-gray-500">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
