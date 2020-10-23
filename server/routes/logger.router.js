const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//get all logs from a user
router.get('/user/:id', rejectUnauthenticated, (req, res) => {
  console.log('req.params.id', req.params.id);
  const queryText = `SELECT * FROM "daily_log" WHERE "user_id" = $1`;
  pool.query(queryText, [req.params.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});


//insert daily log 
router.post('/', rejectUnauthenticated, (req, res) => {
  const dailyLog = req.body;
  console.log('req.body POST', req.body)
  const queryText = `
  INSERT INTO "daily_log" ("date", "user_id", "oximeter", "temperature", "systolic", "diastolic", "blood_pressure", "treatment", "treatment_not_listed",
      "feelings", "reactions", "reactions_not_listed", "symptoms", "symptoms_not_listed")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);`

  pool.query(queryText, [dailyLog.date, dailyLog.userID, dailyLog.oximeter, dailyLog.temperature, dailyLog.systolic, dailyLog.diastolic, 
                          dailyLog.bloodPressure, dailyLog.treatment, dailyLog.treatmentNotListed, dailyLog.feelings, 
                          dailyLog.reactions, dailyLog.reactionsNotListed, dailyLog.symptoms, dailyLog.symptomsNotListed])
    .then((result) => { 
      res.send(result.rows); })
    .catch((err) => {
      console.error('Error completing POST DAILY LOG query', err);
      res.sendStatus(500);
    });
});

//delete specific log
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('REQBODY DELETE', req.body);
  const queryText = `DELETE FROM "daily_log" WHERE "id" = $1`;
  pool.query(queryText, [req.body.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

//get specific logID from a user to render
router.get('/details/:id', rejectUnauthenticated, (req, res) => {
  console.log('req.params.id', req.params.id);
  const queryText = `SELECT * FROM "daily_log" WHERE "id" = $1`;
  pool.query(queryText, [req.params.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

//edit specific logID
router.put('/edit/:id', rejectUnauthenticated, (req, res) => {
  let e=req.body
  console.log('EDIT in logger.router', req.body);
  const queryText = `UPDATE "daily_log" SET "date"=$1,"oximeter"=$2, "temperature"=$3, "systolic"=$4, 
                    "diastolic"=$5, "treatment"=$6, "treatment_not_listed"=$7, "feelings"=$8, "reactions"=$9, 
                    "reactions_not_listed"=$10, "symptoms"=$11, "symptoms_not_listed"$12 WHERE "user_id"=$13`;
  pool.query(queryText, [e.date, e.oximeter, e.temperature, e.systolic, e.diastolic, e.treatment, treatmentNotListed, 
                          e.feelings, e.reactions, e.reactionsNotListed, e.symptoms, e.symptomsNotListed, e.userID])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});



module.exports = router;
