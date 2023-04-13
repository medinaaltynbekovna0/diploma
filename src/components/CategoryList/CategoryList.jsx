import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import "./CategoryList.css";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/category/" + category.path}>{category.name}</NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <ul>{output}</ul>
    </div>
  );
}
