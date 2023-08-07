import React, { useEffect, useState } from "react";
import { Location, useLocation, useParams } from "react-router-dom";

const Details = () => {
    // const { item } = useParams();
    const location = useLocation();

    const item = location.state.item;
    console.log("item", item);

  return (
    <div className="box">
        blah blah blah
      <div className="title">{item.title}</div>
      <div className="description">{item.description}</div>

      {item.urlToImage && (
        <img className="image" src={item.urlToImage} alt={item.title} />
      )}
      <div className="description">{item.content}</div>
    </div>
  );
};

export default Details;
