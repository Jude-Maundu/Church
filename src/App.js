import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Main Pages
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import Contact from "./Components/Contact";
import Announcements from "./Components/Announcements";
import NewsAndEvents from "./Components/News&Events";

// Choir Pages
import UpendoChoir from "./Components/Pages/Choirs/UpendoChoir";
import BlessedVoicesChoir from "./Components/Pages/Choirs/BlessedVoicesChoir";
import SingersForChrist from "./Components/Pages/Choirs/SingersForChrist";

// Jumuia Pages
import StAnne from "./Components/Pages/Jumuias/St.Anne";
import StAugustine from "./Components/Pages/Jumuias/St.Augustine";
import StClaireofAssisi from "./Components/Pages/Jumuias/St.ClaireofAssisi";
import StFrancisofAssisi from "./Components/Pages/Jumuias/St.FrancisofAssisi";
import StMichael from "./Components/Pages/Jumuias/St.Michael";
import StMary from "./Components/Pages/Jumuias/St.Mary";
import StJosemaria from "./Components/Pages/Jumuias/St.Josemaria";
import StJude from "./Components/Pages/Jumuias/St.Jude";
import StMonica from "./Components/Pages/Jumuias/St.Monica";
import StTheresa from "./Components/Pages/Jumuias/St.Theresa";
import StPadrePio from "./Components/Pages/Jumuias/St.PadrePio";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Main */}
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="news" element={<NewsAndEvents />} />

            {/* Jumuia Pages */}
            <Route path="jumuias/st-anne" element={<StAnne />} />
            <Route path="jumuias/st-augustine" element={<StAugustine />} />
            <Route path="jumuias/st-claire" element={<StClaireofAssisi />} />
            <Route path="jumuias/st-francis" element={<StFrancisofAssisi />} />
            <Route path="jumuias/st-michael" element={<StMichael />} />
            <Route path="jumuias/st-mary" element={<StMary />} />
            <Route path="jumuias/st-josemaria" element={<StJosemaria />} />
            <Route path="jumuias/st-jude" element={<StJude />} />
            <Route path="jumuias/st-monica" element={<StMonica />} />
            <Route path="jumuias/st-theresa" element={<StTheresa />} />
            <Route path="jumuias/st-padrepio" element={<StPadrePio />} />

            {/* Choir Pages */}
            <Route path="choirs/upendo" element={<UpendoChoir />} />
            <Route path="choirs/blessed-voices" element={<BlessedVoicesChoir />} />
            <Route path="choirs/singers-for-christ" element={<SingersForChrist />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
