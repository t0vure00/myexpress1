const express = require('express');
const router = express.Router();
const course = require('../models/course_model');

router.get('/:id?',//koska on : niin sen perässä oleva on muuttujan parametri, ? = saa jäädä tyhäjksi
 function(request, response) {
  if (request.params.id) {//testaa onko id annettu, jos on niin kutsuu getById
    course.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        console.log(dbResult[0]);
        response.json(dbResult[0]);
      }
    });
  } else {//jos id ei annettu kutsuu getcourse
    course.getcourse(function(err, dbResult) {
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
  course.add(request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult.insertId);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  course.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  course.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;