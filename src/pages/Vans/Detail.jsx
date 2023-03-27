import { Link } from "react-router-dom";

export default function VanDetail() {
  return (
    <div className="van-detail-container">
      <Link to={`..`} className="back-button">
        &larr; <span>Back to type vans</span>
      </Link>

      <div className="van-detail">
        <img src={"/assets/about-hero.png"} />
        <i className={`van-type type selected`}>type</i>
        <h2>name</h2>
        <p className="van-price">
          <span>$10K</span>/day
        </p>
        <p>description</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
}
