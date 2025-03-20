
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json()) 
    .then(data => {
      renderBooks(data);
  
      return data; 
    })
    .catch(error => console.error("Error fetching books:", error));
}


function renderBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = books.map(book => `<li>${book.name}</li>`).join("");
}


if (typeof module !== "undefined" && module.exports) {
  module.exports = { fetchBooks, renderBooks };
}
