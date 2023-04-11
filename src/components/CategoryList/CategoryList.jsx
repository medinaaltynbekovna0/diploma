import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { categoryCollection } from "../../firebase";
import "./CategoryList.css";
export default function Category(){
  const [categories, setCatigories] = useState([]);

  useEffect(() =>{
    getDocs(categoryCollection)
    .then(snapshot =>{
      const newCategories =[];

      snapshot.docs.forEach(doc => {
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });
      setCatigories(newCategories);
    })
  }, []);

  const output = categories.map(category => (
    <li key={category.id}>
      <NavLink to={'/category/' +  category.path}>
        {category.name}
      </NavLink>
    </li>
  ));
  
  return(
    <div  className="CategoryList">
     <ul>
     {output}
     </ul>
    </div>
  );
}