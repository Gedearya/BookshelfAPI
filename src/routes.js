const {
  addBook,
  getAllBooks,
  getBookDetailById,
  updateBookById,
  deleteBookById,
} = require("./handler");

// Mendefinisikan Routes untuk :
// POST (menambahkan buku)
// GET (menampilkan semua buku/detail buku)
// PUT (merubah buku)
// DELETE ( menghapus buku)

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookDetailById,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: updateBookById,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBookById,
  },
];

module.exports = routes;
