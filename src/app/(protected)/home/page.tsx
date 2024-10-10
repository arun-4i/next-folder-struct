import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import MainContent from "./main-content";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
