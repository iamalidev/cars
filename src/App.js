import { BrowserRouter, Routes, Route } from "react-router-dom";
import Supra from "./pages/Supra";
import Dodge from "./pages/Dodge";
import Ford from "./pages/Ford";
import Lamborghini from "./pages/Lamborghini";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Supra />} />
        <Route index path="/supra" element={<Supra />} />
        <Route path="/dodge" element={<Dodge />} />
        <Route path="/ford" element={<Ford />} />
        <Route path="/lamborghini" element={<Lamborghini />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
