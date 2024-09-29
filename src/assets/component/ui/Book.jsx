import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
      <div className="book__ratings">
        {
        new Array(Math.floor(book.rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon= "star" key={index}/>
        ))}
        {
          Number.isInteger(book.rating) ? "" :
          <FontAwesomeIcon icon= "star-half-alt"/>


        }
      </div>
      <div className="book__price">
      {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
          <>${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};

export default Book;