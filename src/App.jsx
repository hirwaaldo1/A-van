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
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout from "./components/Wrapper/Host";
import HostIncome from "./pages/Host/Income";
import HostVans, { loader as hostVansLoader } from "./pages/Host/Vans";
import HostReviews from "./pages/Host/Reviews";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/Detail";
import HostVanDetail, {
  loader as hostVansDetailLoader,
} from "./pages/Host/VanDetail";
import HostVanInfo from "./pages/Host/VanInfo";
import HostVanPricing from "./pages/Host/VanPricing";
import HostVanPhotos from "./pages/Host/VanPhotos";
import "../server";
import { requireAuth } from "./utils/requireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        action={loginAction}
        loader={loginLoader}
      />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<HostIncome />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="reviews"
          element={<HostReviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVansDetailLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
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
