import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Floating from "./components/FloatingDev/Floating";
import { Services } from "./components/Services/Services";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className="header">
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Intro/>
        </section>
        <section>
         <Services/>
        </section>
        <section>
         <Experience/>
        </section>
        <section>
         <Projects/>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
