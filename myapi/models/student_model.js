const db = require('../database');//tarkoittaa siis database.js

const student = {//student on luokka tässä johon kuul get,getById.. apit "jäsenfunktiot
  getstudent: function(callback) {
    return db.query('select * from student', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from student where id_student=?', [id], callback);
//parametrin sitominen, mitä käyttäjä kirjoittaa menee kokonaisena ? tilalle
//ei ole turvallisuuden kannalta hyvä? voi laittaa or lauseen ja vaikka 1==1 joka on totta 
//ja pääsee siten kirjautumaan vaikka ei tiedä oikeaa nimeä ja salasanaa  
},
  add: function(student, callback) {
    return db.query(
      'insert into student (fname,lname) values(?,?)',
      [student.fname, student.lname],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from student where id_student=?', [id], callback);
  },
  update: function(id, student, callback) {
    return db.query(
      'update student set fname=?,lname=?, where id_student=?',
      [student.fname, student.lname, id],
      callback
    );
  }
};
module.exports = student;