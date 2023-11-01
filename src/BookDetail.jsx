import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  //get id parameter from url
  const { id } = useParams();

  const [book, setBook] = useState(null);

  //load book detail from api
  const loadBook = async () => {
    const url =
      "https://classes.codingbootcamp.cz/assets/classes/books-api/book.php?id=" +
      id;
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);

    setBook(data); //
  };

  //reload iformation about the book if id is changed
  useEffect(() => {
    loadBook();
  }, [id]);

  return book ? (
    <div className="book-detail">
      <h2>Book detail</h2>
      <h3>{book.title}</h3>
      <p>By: {book.authors[0].name}</p>
      <p>Pages: {book.pages}</p>
      <div className="img-conatiner">
        {/* <img src="`{book.image}`" alt="" /> */}
      </div>
    </div>
  ) : (
    "📚 Loading..."
  );
}
