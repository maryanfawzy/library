import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Book = ({book})=>{
    return(
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
            new Array(5).fill(0).map((_,index) => <FontAwesomeIcon/>
            )
        }
        </div>
        <div className="book__price">
            {
                book.salePrice ?  (
                <>
                <span className="book__price--normal">${book.originalPrice.tofixed(2)}</span>
                ${book.salePrice.tofixed(2)}
                </>
                )
                :( 
                    <>${book.originalPrice.tofixed(2)}</>
                
                 )
            }
        </div>
    </div>
    )
};

export  default Book