const books = [
  {
    title: "Make time how to focus",
    authorName: "Jake Knapp",
    releaseYear: 2018,
  },
  {
    title: "The Art of Laziness",
    authorName: "Library Mindset",
    releaseYear: 2024,
  },
  {
    title: "Atomic Habits",
    authorName: "James Clear",
    releaseYear: 2018,
  },
];

function sortByYear(book1, book2) {
  let result = 0;
  if (book1.releaseYear > book2.releaseYear) {
    result = 1;
  } else if (book1.releaseYear < book2.releaseYear) {
    result = -1;
  }
  return result;
}

let filteredBooks = books.filter((book) => book.releaseYear > 2018);

filteredBooks.sort(sortByYear);
