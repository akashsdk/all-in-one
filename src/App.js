import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ErrorPage from './Screen/ErrorPage';
import Home from "./Screen/Home";
import Header from "./Screen/Header";
import Footer from "./Screen/Footer";
import Contact from "./Screen/Contact";


import Calculator from './Component/Calculator';
import SciCalculator from './Component/SciCalculator';
import Calendar from './Component/Calendar';
import RubikCube from './Component/RubikCube';
import GPACalculator from './Component/GPACalculator';
import Stopwatch from './Component/Stopwatch';
import Timers from './Component/Timers';
import Notepad from './Component/Notepad';
import VoiceRecord from './Component/VoiceRecord';
import InternetSpeed from './Component/InternetSpeed';
import Maps from './Component/Maps';
import LangTranslate from './Component/LangTranslate';
import BitwiseCalculator from './Component/BitwiseCalculator';
import BMICalculator from "./Component/BMICalculator";
import Camera from './Component/Camera';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Scientific-Calculator" element={<SciCalculator />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/Rubik-Cube" element={<RubikCube />} />
          <Route path="/GPA-Calculator" element={<GPACalculator />} />
          <Route path="/Stopwatch" element={<Stopwatch />} />
          <Route path="/Timers" element={<Timers />} />
          <Route path="/Notepad" element={<Notepad />} />
          <Route path="/Voice-Record" element={<VoiceRecord />} />
          <Route path="/Internet-Speed" element={<InternetSpeed />} />
          <Route path="/Maps" element={<Maps />} />
          <Route path="/Language-Translate" element={<LangTranslate />} />
          <Route path="/Bitwise-Calculator" element={<BitwiseCalculator />} />
          <Route path="/BMI-Calculator" element={<BMICalculator />} />
          <Route path="/Camera" element={<Camera />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
