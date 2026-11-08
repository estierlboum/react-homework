import React from 'react'


const BooksTable = () => {
    const books = [
  {
    id: 1,
    name: 'סודות היער',
    author: 'דבורה כהן',
    price: 65,
    year: 2020
  },
  {
    id: 2,
    name: 'הדרך אל האור',
    author: 'יעקב לוי',
    price: 80,
    year: 2022
  },
  {
    id: 3,
    name: 'חלומות רחוקים',
    author: 'שרה ברמן',
    price: 55,
    year: 2019
  },
  {
    id: 4,
    name: 'מפתח התקווה',
    author: 'משה רוזנפלד',
    price: 70,
    year: 2021
  },
  {
    id: 5,
    name: 'עולם של הפתעות',
    author: 'רחל שפירא',
    price: 90,
    year: 2023
  }
]
  return (
   <table>
    <thead>
        <tr><th>שם הספר</th> <th>שם המחבר</th> <th>מחיר</th> <th>שנת הוצאה</th></tr>
    </thead>
    <tbody>
        {books.map(book =>(
           <tr key={book.id}><td>{book.name}</td> <td>{book.author}</td><td>{book.price}</td><td>{book.year}</td></tr>
        ))}
    </tbody>
   </table>
  )
}

export default BooksTable