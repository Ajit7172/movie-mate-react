// Write a factorial for 5
const factorial = n => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5)); // Output: 120

// HW
// Write a fibonaci series for nth Number

// create a book object and do CRUD operations (spread operator)
let books = {
  1: { title: "1984", author: "George Orwell", year: 1949 },
  2: { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  3: { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
};

// Create
const createBook = (books, newBook) => {
  const id = Object.keys(books).length + 1;
  return { ...books, [id]: newBook };
};

books = createBook(books, { title: "Brave New World", author: "Aldous Huxley", year: 1932 });
console.log("After Create:", books);

// Read
const readBook = (books, id) => {
  return books[id] || null;
};

console.log("Read Book ID 2:", readBook(books, 2));

// Update
const updateBook = (books, id, updatedBook) => {
  if (!books[id]) {
    return books; // If the book doesn't exist, return the original books object
  }
  return { ...books, [id]: { ...books[id], ...updatedBook } };
};

books = updateBook(books, 3, { year: 1926 });
console.log("After Update:", books);

// Delete
const deleteBook = (books, id) => {
  const { [id]: _, ...remainingBooks } = books;
  return remainingBooks;
};

books = deleteBook(books, 1);
console.log("After Delete:", books);


const reverseArray = arr => arr.slice().reverse();

const inputArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(inputArray);

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(inputArray); // Output: [1, 2, 3, 4, 5] (remains unchanged)
