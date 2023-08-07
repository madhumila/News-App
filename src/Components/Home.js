import React, { useEffect, useState } from "react";
import Main from "./Main";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("general");
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${selectedCategory}&apiKey=ff68345e87ae47718a770c0ca80cbd30`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.articles);
        console.log(data); // Process the data returned from the server
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [selectedCategory]);
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="container">
      <div className="nav-links">
        <Link onClick={() => handleCategory("general")}>
          <h2  className={selectedCategory === 'general' ? 'active' : ''}>General</h2>
        </Link>
        <Link onClick={() => handleCategory("Health")}>
          <h2  className={selectedCategory === 'Health' ? 'active' : ''}>Health</h2>
        </Link>
        <Link onClick={() => handleCategory("Science")}>
          <h2  className={selectedCategory === 'Science' ? 'active' : ''}>Science</h2>
        </Link>
        <Link onClick={() => handleCategory("Sports")}>
          <h2  className={selectedCategory === 'Sports' ? 'active' : ''}>Sports</h2>
        </Link>
        <Link onClick={() => handleCategory("Technology")}>
          <h2  className={selectedCategory === 'Technology' ? 'active' : ''}>Technology</h2>
        </Link>
      </div>
      <div className="main-grid">
        {data.map((item) => (
          <Main item={item} selectedCategory={selectedCategory} />
        ))}
      </div>
    </div>
  );
};

export default Home;
