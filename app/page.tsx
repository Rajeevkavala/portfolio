import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import ScrollToTop from "./components/ui/ScrollToTop";

export default function Home() {
  return (
    <div className="relative overflow-clip bg-background" id="home">
      <Navbar />
      <Sections />
      <ScrollToTop />
    </div>
  );
}
