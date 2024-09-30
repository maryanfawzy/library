import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {Link} from "react-router-dom"
import Ratings from '../assets/component/ui/Raiting';
import Price from '../assets/component/ui/Price';


 const BookInfo =({ books})=> {
  return (
    <div id='books__body'>
        <main id='books__main'>
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to= "/books">
                        <FontAwesomeIcon icon = "arrow-alt-left"/>
                        </Link>
                        <Link to = "/book" className='book__link'>
                        <h2 className='book__selected--title--top'>Books</h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src="" alt="" className="book__selected--img" />
                        </figure>
                        <div className="book__selected--description"><h2 className='book__selected--title'>
                            </h2>
                            <Ratings rating=""/>
                            <div className="book__selected--price">
                                <Price salePrice={books.salePrice} originalPrice={books.originalPrice}/>
                            </div>
                            <div className="book__summary">
                                <div className="book__summary--title">Summary</div>
                                <p className="booksummary--para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos incidunt adipisci officia ad ducimus aut deserunt architecto. Qui itaque quibusdam ullam error ab eaque a consectetur. Sequi unde eos reprehenderit.</p>
                            </div>
                            <button className='btn'>Add to the Cart

                            </button>
                            </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

        </main>

    </div>
  )
}
export default BookInfo;