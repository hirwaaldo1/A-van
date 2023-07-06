import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { getVans } from "../../services/api";
import { defer } from "react-router-dom/dist";
import checkAuth from "../../utils/checkAuth";

export async function loader({ request }) {
  await checkAuth(request);
  return defer({ vans: getVans() });
}

export default function Dashboard() {
  const data = useLoaderData();

  function displayVans(vans) {
    return vans.map((van) => (
      <section key={van.id}>
        <div className="host-van-single">
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
          <Link to={`/vans/${van.id}`} state={{ from: "host" }}>
            Details
          </Link>
        </div>
      </section>
    ));
  }

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2>Review score</h2>
        <BsStarFill className="star" />
        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        <div className="host-vans-list">
          <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={data.vans}>{displayVans}</Await>
          </Suspense>
        </div>
      </section>
    </>
  );
}
