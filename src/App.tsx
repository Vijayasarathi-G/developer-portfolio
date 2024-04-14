import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import ReactGA from "react-ga4";
import {TRACKING_ID} from "./data/tracking.ts";
import Homepage from "./pages/homepage.tsx";
import About from "./pages/about.tsx";
import Projects from "./pages/projects.tsx";
import Contact from "./pages/contact.tsx";
import Notfound from "./pages/404.tsx";
import "./app.css";

const App = () => {
    useEffect(() => {
        if (TRACKING_ID !== "") {
            ReactGA.initialize(TRACKING_ID);
        }
    }, []);

    return (
        <div className="App container">
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </div>
    );
}

export default App;