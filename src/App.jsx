import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
