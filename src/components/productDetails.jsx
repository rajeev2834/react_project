import React, { Component } from "react";
import {useParams, useNavigate} from "react-router-dom";


const ProductDeatils = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  function handleSave() {
    navigate("/products", {replace: true});
  }

  return (  
    <div>
      <h1>Product Details - {id}</h1>
      <button className="btn btn-success btn-sm m-2" onClick={handleSave}>Save</button>
    </div>
  );
}
 
export default ProductDeatils;
