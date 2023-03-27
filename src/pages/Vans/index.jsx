import { Link } from "react-router-dom";

export default function Vans() {
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button className={`van-type simple`}>Simple</button>
        <button className={`van-type luxury`}>Luxury</button>
        <button className={`van-type rugged`}>Rugged</button>
        <button className="van-type clear-filters">Clear filter</button>
      </div>
      <div className="van-list">
        <div className="van-tile">
          <Link>
            <img src="/assets/about-hero.png" />
            <div className="van-info">
              <h3>name</h3>
              <p>
                $10
                <span>/day</span>
              </p>
            </div>
            <i className={`van-type selected`}>type</i>
          </Link>
        </div>
      </div>
    </div>
  );
}
