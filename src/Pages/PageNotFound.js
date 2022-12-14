import React from "react";
import { useLocation } from "react-router-dom";

export default function PageNotFound() {
  let location = useLocation(); // data of current route

  return (
    <div>Sorry about that. The page {location.pathname} doesn't exist.</div>
  );
}
