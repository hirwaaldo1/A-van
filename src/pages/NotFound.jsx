import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <button className="link-button" onClick={() => navigate(-1)}>
        Return to Home
      </button>
    </div>
  );
}
