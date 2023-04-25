import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import ProductList from "../components/ProductList/ProductList";
import NotFound from "./NotFound";

export default function Category() {
	//деструктизация
  const { params } = useMatch("/category/:path");
	const { categories } = useContext(AppContext);
 //простой метод
  //const match = useMatch("/category/:path");
	//match.params.path;


	const category = categories.find(
		category => params.path === category.path
	); 
	if (!category) {
		return <NotFound />
	}

  return (
    <div className="Category">
      <h1>{category ? category.name : "Loading..."}</h1>
			<ProductList category={category}/>

    </div>
  );
}
