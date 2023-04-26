import { Suspense } from "react";
import { Await, Link, useLoaderData, useSearchParams } from "react-router-dom";
import { defer } from "react-router-dom/dist";
import { getVans } from "../../services/api";

export function loader() {
  return defer({ vans: getVans() });
}

export default function Vans() {
  const filterOption = ["simple", "luxury", "rugged"]; // all Variables should be named in camelCase
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  function filterVans(type) {
    setSearchParams((params) => {
      params.set("type", type);
      return params;
    });
  }
  function displayVans(vans) {
    const displayData = searchParams.get("type")
      ? vans.filter((van) => van.type === searchParams.get("type"))
      : vans;
    return displayData.map((van) => (
      <div key={van.id} className="van-tile">
        {/* the reason why i didn't used "/vans/:vanId" is because V6 came with new feature of relative */}
        <Link to={`${van.id}`} state={{ from: searchParams.get("type") }}>
          <img src={van.imageUrl} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type}`}>{van.type}</i>
        </Link>
      </div>
    ));
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        {filterOption.map((value) => {
          return (
            <button
              key={`filter-option-${value}`}
              className={`van-type ${
                value === searchParams.get("type") && `active ${value}`
              }
              }`}
              onClick={() => filterVans(value)}
            >
              {value}
            </button>
          );
        })}
        {searchParams.get("type") && (
          <button
            className="van-type clear-filters"
            onClick={() => {
              setSearchParams((params) => {
                params.delete("type");
                return params;
              });
            }}
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="van-list">
        <Suspense fallback={<h2>Loading vans...</h2>}>
          <Await resolve={data.vans}>{displayVans}</Await>
        </Suspense>
      </div>
    </div>
  );
}
