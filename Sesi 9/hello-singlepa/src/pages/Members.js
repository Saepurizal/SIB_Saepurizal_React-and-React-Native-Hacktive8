import React from "react";
import { Link, Outlet } from "react-router-dom"

export default function Members() {
  return (
    <div>
      <h1>Members page</h1>
      <p>Select a member to be shown</p>
      <Link to="John Doe">John Doe</Link> |{" "}
      <Link to="Doe Jane">Doe Jane</Link>
      <Outlet />
    </div>
  )
}