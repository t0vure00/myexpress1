const db = require('../database');//tarkoittaa siis database.js

const course = {//course on luokka tässä johon kuul get,getById.. apit "jäsenfunktiot
  getcourse: function(callback) {
    return db.query('select * from course', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from course where id_course=?', [id], callback);
//parametrin sitominen, mitä käyttäjä kirjoittaa menee kokonaisena ? tilalle
//ei ole turvallisuuden kannalta hyvä? voi laittaa or lauseen ja vaikka 1==1 joka on totta 
//ja pääsee siten kirjautumaan vaikka ei tiedä oikeaa nimeä ja salasanaa  
},
  add: function(course, callback) {
    return db.query(
      'insert into course (cname,credits) values(?,?)',
      [course.cname, course.credits],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from course where id_course=?', [id], callback);
  },
  update: function(id, course, callback) {
    return db.query(
      'update course set cname=?,credits=? where id_course=?',
      [course.cname, course.credits, id],
      callback
    );
  }
};
module.exports = course;