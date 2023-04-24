import { useLocation, Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../services/api";

export function loader({ params: { id } }) {
  return getVans(id);
}

export default function VanDetail() {
  const van = useLoaderData();
  const { state } = useLocation();
  const search = state?.search || "";
  const type = state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
