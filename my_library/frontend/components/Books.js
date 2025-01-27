"use client";

import { useEffect, useState } from 'react';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/grpc');
        const result = await response.json();
        setBooks(result.data.books || []);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <ul className="list-disc pl-5">
        {books.map((pub, index) => (
          <li key={index}>
            <strong>{pub.name}</strong> by {pub.authors} - Formats: {pub.formats}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
