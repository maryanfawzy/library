import React, { useState } from 'react'
import { books } from '../assets/component/data';
import Book from '../assets/component/ui/Book';
    //  const Books({books: initalBooks})=> {
    //  const [book, setBooks]=useState(initalBooks)}
     const Books = ({ books: initalBooks }) => {
         const [book, setBooks] = useState();
        function filterBooks (filter){
            if (filter=="Low_To_High"){
                setBooks( books.slice().sort((a, b) =>(a.salePrice||a.originalPrice)(-b.salePrice||b.originalPrice))) 
            }
            if(filter =="High_To_Low"){
                setBooks(books.slice().sort((a,b)=>(b.salePrice||b.originalPrice)-(a.salePrice||a.originalPrice)))
            }
        }
  return (
    <div id='books__body'>
        <main id='books__main'>
            <section >
                <div className="books__container">
                    <div className="books__header">
                        <h2 className='section__title books__header--title'>All Books</h2>
                        <select name="" id="filter" defaultValue="Default" onChange={(event) =>filterBooks(event.target.value)}>
                            <option value="defualt" selected disabled>Sort</option>
                            <option value="Low-To-High">Low-To-High</option>
                            <option value="High-To-Low">High-To-Low</option>
                            <option value="Raiting">Raiting</option>
                        </select>
                    </div>
                    <div className='books'>
                        {
                            books.map((book) => 
                                <Book book={book} key = {book.id}/>
                       ) }


                    </div>

                </div>


            </section>

        </main>
    </div>
  )
}
export default Books;