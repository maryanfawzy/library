import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Raiting from "./Raiting";
import Price from "./Price";

const Book = ({ book }) => {
  if (!book) return null;  
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" />
        </figure>
      </a>
      <div className="title">
        <a className="book__title--link" href="">
          {book.title}
        </a>
      </div>
      <div className="book__raiting">
       
     <Raiting rating= {book.rating}/> 
      
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
   
        
      </div>
    </div>
  );
};

export default Book;