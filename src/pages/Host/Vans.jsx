import { Suspense } from "react";
import { Await, Link, useLoaderData } from "react-router-dom";
export async function loader() {
  let res = await fetch("/api/vans");
  return res.json();
}
export default function HostVans() {
  const data = useLoaderData();
  function displayVans(vans) {
    return vans.map((van) => (
      <Link
        to={`/vans/${van.id}`}
        state={{ from: "host" }}
        key={van.id}
        className="host-van-link-wrapper"
      >
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ));
  }
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Await resolve={data.vans}>{displayVans}</Await>
      </Suspense>
    </section>
  );
}
