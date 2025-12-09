import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import MainContent from "./components/layout/MainContent";

function App() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="ml-[263px]">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}


export default App;
