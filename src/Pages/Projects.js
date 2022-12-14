import React from "react";
import { useParams } from "react-router-dom";

export default function Projects() {
  let { name } = useParams();
  return <div>This is a project page. This project is {name}.</div>;
}
