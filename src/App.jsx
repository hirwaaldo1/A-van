import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/index";
import Vans, { loader } from "./pages/Vans";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout from "./components/Wrapper/Host";
import HostIncome from "./pages/Host/Income";
import HostVans from "./pages/Host/Vans";
import HostReviews from "./pages/Host/Reviews";
import { loader as vansDashboardLoader } from "./pages/Host/Dashboard";
import { loader as vansLoader } from "./pages/Vans";
import { loader as vansIdLoader } from "./pages/Vans/Detail";
import Error from "./components/error/Error";
import "../server";
import VanDetail from "./pages/Vans/Detail";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:vanId" element={<VanDetail />} loader={vansIdLoader} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          loader={vansDashboardLoader}
          errorElement={<Error />}
          element={<Dashboard />}
        />
        <Route path="income" element={<HostIncome />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="reviews" element={<HostReviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
