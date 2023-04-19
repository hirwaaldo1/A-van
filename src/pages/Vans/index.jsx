import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { useMemo } from "react";
import { getVans } from "../../services/api";
export function loader() {
  return getVans();
}
export default function Vans() {
  const vans = useLoaderData();
  const filterOption = ["simple", "luxury", "rugged"];
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const displayedVans = useMemo(() => {
    return typeFilter ? vans.filter((van) => van.type === typeFilter) : vans;
  }, [typeFilter, vans]);

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        {filterOption.map((option, index) => {
          return (
            <button
              key={`van-type-${index}`}
              onClick={() => handleFilterChange("type", option)}
              className={`van-type ${option} ${
                typeFilter === option ? "selected" : ""
              }`}
            >
              {option}
            </button>
          );
        })}

        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list">
        {displayedVans.map((van) => (
          <div key={van.id} className="van-tile">
            <Link
              to={`/vans/${van.id}`}
              state={{
                search: `?${searchParams.toString()}`,
                type: typeFilter,
              }}
            >
              <img src={van.imageUrl} />
              <div className="van-info">
                <h3>{van.name}</h3>
                <p>
                  ${van.price}
                  <span>/day</span>
                </p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
