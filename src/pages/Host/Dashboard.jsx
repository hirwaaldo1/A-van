import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

export default function Dashboard() {
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
          <section>
            <div className="host-van-single">
              <img src={"/assets/about-hero.png"} alt={`Photo of name`} />
              <div className="host-van-info">
                <h3>name</h3>
                <p>$10K/day</p>
              </div>
              <Link to={`vans/:id`}>View</Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
