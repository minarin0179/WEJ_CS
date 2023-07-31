import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Edit } from "./Edit";
import { Top } from "./Top";
import { List } from "./List";


export const router = createBrowserRouter([
  { path: "/", element: <Top /> },
  { path: "edit", element: <Edit /> },
  { path: "list", element: <List /> },
]);