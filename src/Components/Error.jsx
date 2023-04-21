import React from "react";
import { useNavigate, Link } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>404 page not Found</div>
      <Link>
        <button onClick={() => navigate(-1)}>GO back</button>
      </Link>
      <h2 style={{ color: "red" }}>Error</h2>
    </div>
  );
};

export default Error;
