import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav>
      <Link to="/inputurl">inputurl </Link>
      <Link to="/signup">signup </Link>
      <Link to="/urls-list">myurls </Link>
    </nav>
  );
}
