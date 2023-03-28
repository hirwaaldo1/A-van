import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

export async function loader({ params }) {
  let res = await fetch(`/api/vans/${params.vanId}`);
  return res.json();
}

export default function VanDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    vans: { imageUrl, name, price, type },
  } = useLoaderData();

  return (
    <div className="van-detail-container">
      {state && (
        <span onClick={() => navigate(-1)} className="back-button">
          &larr; <span>Back to type vans</span>
        </span>
      )}

      <div className="van-detail">
        <img src={imageUrl} />
        <i className={`van-type ${type} selected`}>{type}</i>
        <h2>{name}</h2>
        <p className="van-price">
          <span>${price}</span>/day
        </p>
        <p>description</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
}
