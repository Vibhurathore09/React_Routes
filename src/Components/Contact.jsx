import React from "react";
import { Link, Outlet } from "react-router-dom";
const Contact = () => {
  return (
    <div>
      <Link to={"insta"}>
        <h2>Contact via Instagram</h2>
      </Link>
      <Link to={"mail"}>
        <h2>Contact via Email</h2>
      </Link>
      <Outlet />
    </div>
  );
};

export default Contact;
