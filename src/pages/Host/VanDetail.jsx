import { Link, NavLink, Outlet } from "react-router-dom";
export default function HostVanDetail() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={"/assets/about-hero.png"} />
          <div className="host-van-detail-info-text">
            {/* <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i> */}
            <h3>name</h3>
            <h4>$10K/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink to="." style={() => activeStyles}>
            Details
          </NavLink>
          <NavLink to="pricing" style={() => activeStyles}>
            Pricing
          </NavLink>
          <NavLink to="photos" style={() => activeStyles}>
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
