import { Routes, Route } from "react-router-dom";
import { getDocs } from "firebase/firestore";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import Category from "./pages/Category";
import { createContext, useEffect, useState } from "react";
import { categoryCollection } from "./firebase";

export const AppContext = createContext({
  categories: [],
});

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(categoryCollection).then((snapshot) => {
      const newCategories = [];

      snapshot.docs.forEach((doc) => {
        const category = doc.data();
        category.id = doc.id;

        newCategories.push(category);
      });
      setCategories(newCategories);
    });
  }, []);
  return (
    <div className="App">
      <AppContext.Provider value={{ categories }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/category/:path" element={<Category />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
