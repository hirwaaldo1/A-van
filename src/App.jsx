import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/index";
import Vans, { loader as vansLoader } from "./pages/Vans";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login, {
  action as loginAction,
  loader as loginLoader,
} from "./pages/Login";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout from "./components/Wrapper/Host";
import HostIncome from "./pages/Host/Income";
import HostVans from "./pages/Host/Vans";
import HostReviews from "./pages/Host/Reviews";
import { loader as vansDashboardLoader } from "./pages/Host/Dashboard";
import { loader as vansIdLoader } from "./pages/Vans/Detail";
import { loader as hostVansLoader } from "./pages/Host/Vans";
import Error from "./components/error/Error";
import VanDetail from "./pages/Vans/Detail";
import SignUp from "./pages/SignUp";
import { action as signupAction } from "./pages/SignUp";
import HostVanDetail, {
  loader as VanDetailLoader,
} from "./pages/Host/VanDetail";
import HostVanInfo from "./pages/Host/VanInfo";
import HostVanPricing from "./pages/Host/VanPricing";
import HostVanPhotos from "./pages/Host/VanPhotos";
import checkAuth from "./utils/checkAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:vanId" element={<VanDetail />} loader={vansIdLoader} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        action={loginAction}
        loader={loginLoader}
      />
      <Route path="signup" element={<SignUp />} action={signupAction} />
      <Route path="host" element={<HostLayout />}>
        <Route
          index
          loader={vansDashboardLoader}
          errorElement={<Error />}
          element={<Dashboard />}
        />
        <Route
          path="income"
          element={<HostIncome />}
          loader={async ({ request }) => await checkAuth(request)}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:vanId"
          element={<HostVanDetail />}
          loader={VanDetailLoader}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route
          path="reviews"
          element={<HostReviews />}
          loader={async ({ request }) => await checkAuth(request)}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
