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


router.post('/profile', (req, res) => {
  const profile= req.body;

  const queryText = `INSERT INTO "user" (
      "covid_positive", "current_covid_symptoms", "smoke_exposed", "daily_vitamins", "insurance", 
      "public_exposed_children", "negative_effects", "personality", "AC", "dwelling", "water", "race", "development", "hospital_visits", 
      "sex", "age_range", "income_range", "avg_social_gatherings", "weight_range"
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19);`
  pool
    .query(queryText, [profile.covid_positive, profile.current_covid_symptoms, profile.smoke_exposed, profile.daily_vitamins, 
            profile.insurance, profile.public_exposed_children, profile.negative_effects, profile.personality, profile.AC, profile.dwelling, 
            profile.water, profile.race, profile.development, profile.hospital_visits, profile.sex, profile.age_range, profile.income_range, 
            profile.avg_social_gatherings, profile.weight_range])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});//end router.post profile UPDATE


//update Email Address for users
router.put('/profile', (req, res) => {
  const profile= req.body;

  const queryText = `UPDATE "user" SET "email" = $1 WHERE "id" = $2;`;
pool
    .query(queryText, [profile.newEmail, profile.id])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

//update Password for users
router.put('/profile', (req, res) => {
  const profile= req.body;

  const queryText = `UPDATE "user" SET "password" = $1 WHERE "id" = $2;`;
pool
    .query(queryText, [profile.newPassword, profile.id])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
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
