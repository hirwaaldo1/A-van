import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/index";
import Vans from "./pages/Vans";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import VanDetail from "./pages/Vans/Detail";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vans" element={<Vans />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
