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
  const queryText = `
  INSERT INTO "daily_logs" ("date", "user_id", "oximeter", "temperature", "bp_systolic", "bp_diastolic", "treatment", "treatment_not_listed",
      "feeling", "other_feelings", "medical_reactions", "reactions_not_listed", "symptoms", "other_symptoms")
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);`

  pool.query(queryText, [dailyLog.date, dailyLog.user_id, dailyLog.oximeter, dailyLog.temperature, dailyLog.bp_systolic, dailyLog.bp_diastolic, 
                          dailyLog.treatment, dailyLog.treatment_not_listed, dailyLog.feeling, dailyLog.other_feelings, 
                          dailyLog.medical_reactions, dailyLog.reactions_not_listed, dailyLog.symptoms, dailyLog.other_symptoms])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.error('Error completing POST DAILY LOG query', err);
      res.sendStatus(500);
    });
});


module.exports = router;
