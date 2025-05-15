import TopBackground from "./components/Hero/TopBackground";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

export default function Home() {
  return (
    <div className="relative overflow-clip" id="home">
      <Sections />
      <Navbar />
      <TopBackground />
    </div>
  );
}
