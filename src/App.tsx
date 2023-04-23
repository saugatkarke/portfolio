import TopNavBar from "./Components/NavBar";
import TopBanner from "./Components/TopBanner";
import HeroBanner from "./Components/HeroBanner";
import Projects from "./Components/Projects";
import About from "./Components/About";
function App(){
  return <div>
  <TopBanner />
  <TopNavBar />
  <HeroBanner />
  <Projects />
  <About />
  </div>
}
export default App;