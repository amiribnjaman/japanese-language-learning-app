import Footer from "@/components/Footer";
import LearnSidebar from "@/components/LearnSidebar";
import Navbar from "@/components/Navbar";

export default function LearnLayout({ children }) {
  return (
    <div>
      <div className="md:w-[70%] mx-auto flex justify-between">
        <div className="md:w-[18%]">
          <LearnSidebar />
        </div>
        <div className="min-h-screen md:w-[80%]">{children}</div>
      </div>
    </div>
  );
}
