const db = require('../database');//tarkoittaa siis database.js

const book = {//book on luokka tässä johon kuul get,getById.. apit "jäsenfunktiot
  getbook: function(callback) {
    return db.query('select * from book', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from book where id_book=?', [id], callback);
//parametrin sitominen, mitä käyttäjä kirjoittaa menee kokonaisena ? tilalle
//ei ole turvallisuuden kannalta hyvä? voi laittaa or lauseen ja vaikka 1==1 joka on totta 
//ja pääsee siten kirjautumaan vaikka ei tiedä oikeaa nimeä ja salasanaa  
},
  add: function(book, callback) {
    return db.query(
      'insert into book (name,author,isbn) values(?,?,?)',
      [book.name, book.author, book.isbn],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from book where id_book=?', [id], callback);
  },
  update: function(id, book, callback) {
    return db.query(
      'update book set name=?,author=?, isbn=? where id_book=?',
      [book.name, book.author, book.isbn, id],
      callback
    );
  }
};
module.exports = book;