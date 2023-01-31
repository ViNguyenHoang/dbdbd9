import "./App.css";

// Components
import Home from "./sections/Home";
import About from "./sections/About";
import LeftNav from "./components/LeftNav";
import Skill from "./sections/Skill";
import Contact from "./sections/Contact";
import More from "./sections/More";

function App() {
    return (
        <div className="app">
            <div className="grid grid-cols-5">
                <div className="col-span-1">
                    <LeftNav />
                </div>
                <div className="col-span-4">
                    <Home />

                    <About />

                    <Skill />

                    <Contact />

                    <More />
                </div>
            </div>
        </div>
    );
}

export default App;
