import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/index";
import Vans, { loader as vansLoader } from "./pages/Vans";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout from "./components/Wrapper/Host";
import HostIncome from "./pages/Host/Income";
import HostVans from "./pages/Host/Vans";
import HostReviews from "./pages/Host/Reviews";
import VanDetail from "./pages/Vans/Detail";
import HostVanDetail from "./pages/Host/VanDetail";
import HostVanInfo from "./pages/Host/VanInfo";
import HostVanPricing from "./pages/Host/VanPricing";
import Error from "./components/error/Error";
import HostVanPhotos from "./pages/Host/VanPhotos";
import "../server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<HostIncome />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="reviews" element={<HostReviews />} />
        <Route path="vans/:id" element={<HostVanDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
