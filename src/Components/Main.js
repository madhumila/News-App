import React from "react";
import "./Main.css";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Main = ({ item, selectedcategory }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/details", {
      state: {
        item: item,
      },
    });
  };

  return (
    <>
      <div className="box">
        <div className="title">{item.title}</div>
        {item.urlToImage && (
          <img className="image" src={item.urlToImage} alt={item.title} />
        )}
        <div className="button">
          <button onClick={handleClick}>View details</button>
        </div>
      </div>
    </>
  );
};

export default Main;
