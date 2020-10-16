const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  const dailyLog = req.body;
  console.log('req.body POST', req.body)
  const queryText = `
  INSERT INTO "daily_logs" ("date", "user_id", "oximeter", "temperature", "bp_systolic", "bp_diastolic", "treatment", "treatment_not_listed",
      "feeling", "medical_reactions", "reactions_not_listed", "symptoms", "symptoms_not_listed")
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


module.exports = router;
