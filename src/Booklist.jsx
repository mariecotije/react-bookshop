import { useState, useEffect } from "react";
import "./Booklist.scss";

export default function Booklist() {
  const [books, setBooks] = useState([]); // State variable to store the books data

  //pagination
  //declare stateful value page
  const [page, setPage] = useState(1);

  const loadBooks = async () => {
    const response = await fetch(
      "https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=" +
        page
    );

    const data = await response.json();

    data.forEach((book) => {
      console.log(book);
    });

    setBooks(data); // Set the books data in the state
  };

  // Load books data after every page change
  useEffect(() => {
    loadBooks(page);
    console.log("page changed: ", page);
  }, [page]);

  //present loaded books
  return (
    <>
      <div className="booklist__main-container">
        <h2>Booklist</h2>
        <div className="booklist__conatiner">
          {books.map((book, index) => (
            <div className="book__conatainer" key={index}>
              <h3 className="title">{book.title}</h3>
              <div className="author">By: {book.authors[0].name}</div>
              <div className="pages">Pages: {book.pages}</div>
              <div className="format">Format: {book.format}</div>
              <div className="price">Price: {book.price}</div>
            </div>
          ))}
        </div>
        <br />
        Current page: {page}
        <div className="pagination">
          <button
            className="button previous"
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
              }
            }}
          >
            Previous page
          </button>

          <button
            className="button next"
            onClick={() => {
              setPage(Number(page) + 1);
            }}
          >
            Next page
          </button>
        </div>
      </div>
    </>
  );
}
