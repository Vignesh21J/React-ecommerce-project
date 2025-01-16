import { useState } from "react";

import Navigation from "./Navigation/nav";
import Products from "./Products/products";
import Recommended from "./Recommended/recommended";
import Sidebar from "./Sidebar/sidebar";

//Database
import products from "./db/data";
import Card from "./components/card";
// import Category from "./Sidebar/Category/category";

import './index.css'

// function App() {
//   return <Navigation />
// }


function App() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //-----Input Filter-----

  //Searching in Input Field
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  //Iterating all datas from import data, and only filtering "title". Now 
  // this is done inside filteredData function

  // const filteredItems = products.filter( (product) => 
  //   product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  // );


  //-----Radio Filter-----
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }


  //------Recommended Buttons Filter------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }


  //selected => selectedCategory defined above
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input Items
    if (query){
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      );
    };

    //Filter by selected category, color, price, etc.,
    if (selected){
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>  
          category === selected || 
          color === selected || 
          company === selected  || 
          newPrice === selected || 
          title === selected
        );
    }

    // Map filtered products to render the Card component
    return filteredProducts.map (( {img, title, star, reviews, prevPrice, newPrice}) => (
      <Card 
      key={Math.random()}
      img = {img}
      title = {title}
      star = {star}
      reviews = {reviews}
      prevPrice = {prevPrice}
      newPrice = {newPrice}
      />
    ));

  }

  const result = filteredData(products, selectedCategory, query)


  return( 
    <>
      <Sidebar handleChange = {handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
      
    </> 
  );
}

export default App;
