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
}); //end register


//get data for a user
router.get('/profile/:id', (req, res) => {
  const queryText = `SELECT * FROM "user" WHERE "id"=$1`;
  pool.query(queryText, [req.body.userID])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on GET query ${error}`);
      res.sendStatus(500);
    });
}); //end GET



  // update data for a user
router.put('/profile/:id', (req, res) => {
  console.log('body and params for user/profile PUT', req.body, req.params.id);
  
  const queryText = `UPDATE "user"
    SET "email"=$1, "covid"=$2, "covid_symptoms"=$3, "cigarettes"=$4, "vitamins"=$5, 
    "insurance"=$6, "children"=$7, "negative"=$8, "personality"=$9, "AC"=$10, "residence"=$11, "water"=$12, 
    "race"=$13, "development"=$14, "visits"=$15, "sex"=$16, "age"=$17, "income"=$18, "social"=$19, "weight"=$20
    WHERE "id" = $21;`;
  const newData = req.body;

  pool.query(queryText, [
    newData.email, newData.covid, newData.covidSymptoms, newData.cigarettes, newData.vitamins, newData.insurance, 
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
}); //end PUT


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
