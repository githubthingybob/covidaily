const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//get all logs from a user
router.get('/user/:id', (req, res) => {
  console.log('req.params.id', req.params.id);
  const queryText = `SELECT * FROM "daily_logs" WHERE "user_id" = $1`;
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
router.post('/', (req, res) => {
  const dailyLog = req.body;
  console.log('req.body POST', req.body)
  const queryText = `
  INSERT INTO "daily_logs" ("date", "user_id", "oximeter", "temperature", "systolic", "diastolic", "treatment", "treatment_not_listed",
      "feelings", "reactions", "reactions_not_listed", "symptoms", "symptoms_not_listed")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`

  pool.query(queryText, [dailyLog.date, dailyLog.userID, dailyLog.oximeter, dailyLog.temperature, dailyLog.systolic, dailyLog.diastolic, 
                          dailyLog.treatment, dailyLog.treatmentNotListed, dailyLog.feelings, 
                          dailyLog.reactions, dailyLog.reactionsNotListed, dailyLog.symptoms, dailyLog.symptomsNotListed])
    .then((result) => { 
      res.send(result.rows); })
    .catch((err) => {
      console.error('Error completing POST DAILY LOG query', err);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  console.log('REQBODY DELETE', req.body);
  const queryText = `DELETE FROM "daily_logs" WHERE "id" = $1`;
  pool.query(queryText, [req.body.id])
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});


module.exports = router;
