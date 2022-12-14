import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
  // an array of the history paths you have been to; by pushing new links to the array, you will be redirected to the last link

  return (
    <div>
      This is the about page.{" "}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to the Home Page
      </button>
    </div>
  );
}
