import React, { useEffect, useState } from "react";

function useBooks() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/show-books").then(async (res) => {
      const data = await res.json();
      setBooks(data.books);
    });
  }, []);

  console.log("useBooks");

  return books;
}

const Book = () => {
  const books = useBooks();
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {books.map((book, index) => {
        return (
          <div key={index} style={{ border: "2px solid purple" }}>
            <p>{book.title}</p>
            <p>{book.category}</p>
          </div>
        );
      })}
      <button onClick={() => setCounter(counter + 1)}> CLick</button>
    </div>
  );
};

export default Book;
