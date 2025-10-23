import Footer from "@/components/Footer";
// import LearnSidebar fro@/app/learn/components/LearnSidebarbar";
import Navbar from "@/components/Navbar";
import LearnSidebar from "./components/LearnSidebar";

export default function LearnLayout({ children }) {
  return (
    <div>
      <div className="md:w-[100%] mx-auto flex justify-between bg-gradient-to-b from-[#f5f7f4] to-[#fbfff9]">
        <div className="md:w-[20%] min-h-screen fixed left-0">
          <LearnSidebar />
        </div>
        <div className="min-h-screen md:w-[80%] overflow-y-auto ml-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
