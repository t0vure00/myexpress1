const express = require('express');
const router = express.Router();
const book = require('../models/book_model');

router.get('/:id?',//koska on : niin sen perässä oleva on muuttujan parametri, ? = saa jäädä tyhäjksi
 function(request, response) {
  if (request.params.id) {//testaa onko id annettu, jos on niin kutsuu getById
    book.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        console.log(dbResult[0]);
        response.json(dbResult[0]);
      }
    });
  } else {//jos id ei annettu kutsuu getbook
    book.getbook(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        console.log(dbResult);
        response.json(dbResult);
      }
    });
  }
});


router.post('/', 
function(request, response) {
  book.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult.insertId);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  book.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  book.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;