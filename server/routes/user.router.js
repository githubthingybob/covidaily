const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});


  // update data for a user
router.put('/profile/:id', (req, res) => {
  console.log('body and params for user/profile PUT', req.body, req.params.id);
  const newData = req.body;
  
  const queryText = `UPDATE "user"
    SET "email"=$1, "covid"='{"${newData.covid.date}", "${newData.covid.testedPositive}"}', "covid_symptoms"=$2, "cigarettes"=$3, 
    "vitamins"=$4, "insurance"=$5, "children"=$6, "negative"=$7, "personality"=$8, "AC"=$9, "residence"=$10, "water"=$11, 
    "race"=$12, "development"=$13, "visits"=$14, "sex"=$15, "age"=$16, "income"=$17, "social"=$18, "weight"=$19
    WHERE "id" = $20;`;
  

  pool.query(queryText, [
    newData.email, newData.covidSymptoms, newData.cigarettes, newData.vitamins, newData.insurance, 
    newData.children, newData.negative, newData.personality, newData.AC, newData.residence, newData.water, newData.race, 
    newData.development, newData.visits, newData.sex, newData.age, newData.income, newData.social, newData.weight,
    newData.userID
  ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.warn(err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
