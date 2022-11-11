import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Home = () => {
  const { state } = useLocation();

  return (
    <div>
      Welcome {state.user.username}
      <button>
        <Link to="/login">Logout</Link>
      </button>
    </div>
  );
};
