const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.put('/:id', (req, res) => {
  // update data for a user
  const queryText = `UPDATE "user"
    SET "email"=$1, "covid_positive"=$2, "covid_symptoms"=$3, "cigarettes"=$4, "vitamins"=$5, 
    "insurance"=$6, "children"=$7, "negative"=$8, "personality"=$9, "AC"=$10, "residence"=$11, "water"=$12, 
    "race"=$13, "development"=$14, "visits"=$15, "sex"=$16, "age"=$17, "income"=$18, "social"=$19, "weight"=$20
    WHERE "id" = $21;`;
  const userId = req.params.id;
  const newData = req.body;

  pool.query(queryText, [
    newData.email, newData.covidPositive, newData.covidSymptoms, newData.cigarettes, newData.vitamins, newData.insurance, 
    newData.children, newData.negative, newData.personality, newData.AC, newData.residence, newData.water, newData.race, 
    newData.development, newData.visits, newData.sex, newData.age, newData.income, newData.social, newData.weight,
    userId
  ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

module.exports = router;
