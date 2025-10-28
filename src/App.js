// ✅ Clean & Working App.js

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


// ✅ Jumuia Pages
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

// ✅ Choir Pages
import UpendoChoir from "./Components/Pages/Choirs/UpendoChoir";
import BlessedVoicesChoir from "./Components/Pages/Choirs/BlessedVoicesChoir";
import SingersForChrist from "./Components/Pages/Choirs/SingersForChrist";
// Church Groups Pages
import AltarServers from "./Components/Pages/ChurchGroup/AltarServers";
import Cma   from "./Components/Pages/ChurchGroup/CMA";
import Cwa   from "./Components/Pages/ChurchGroup/CWA";
import LayCarmelites from "./Components/Pages/ChurchGroup/LayCarmelites";
import LayIncarnate from "./Components/Pages/ChurchGroup/LayIncarnate";
import LaySpiritans from "./Components/Pages/ChurchGroup/LaySpiritans";
import SelfHelp from "./Components/Pages/ChurchGroup/SelfHelp";
import WidowsAssociation from "./Components/Pages/ChurchGroup/WidowsAssociation";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* ✅ Shared Layout (Navbar + Footer) */}
          <Route path="/" element={<Layout />}>
            {/* ✅ Main pages */}
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="news" element={<NewsAndEvents />} />

            {/* ✅ Jumuia Routes */}
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

            {/* ✅ Choir Routes */}
            <Route path="choirs/upendo" element={<UpendoChoir />} />
            <Route path="choirs/blessed-voices" element={<BlessedVoicesChoir />} />
            <Route path="choirs/singers-for-christ" element={<SingersForChrist />} />
            {/* Church Groups Routes */}
            <Route path="church-groups/altar-servers" element={<AltarServers />} />
            <Route path="church-groups/cma" element={<Cma />} />
            <Route path="church-groups/cwa" element={<Cwa />} />
            <Route path="church-groups/lay-carmelites" element={<LayCarmelites />} />
            <Route path="church-groups/lay-incarnate" element={<LayIncarnate />} />
            <Route path="church-groups/lay-spiritans" element={<LaySpiritans />} />
            <Route path="church-groups/self-help" element={<SelfHelp />} />
            <Route path="church-groups/widows-association" element={<WidowsAssociation />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;