# COVIDaily

This app uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Set Up Instructions
1. Run `npm install`
2. Create a .env file at the root of the project and paste this line into the file: SERVER_SESSION_SECRET=superDuperSecret
    - While you're in your new .env file, take the time to replace superDuperSecret with some long random string to keep your application secure. [PasswordGenerator](https://passwordsgenerator.net/) 
    - If you don't do this step, create a secret with less than eight characters, or leave it as superDuperSecret, you will get a warning.
3. Copy covidaily.sql and make database in postgresql called **covidaily**
4. Start postgres brew services start postgresql
5. Run `npm run server`
6. Run `npm run client`
7. Navigate to localhost:3000 on your browser


## 



## 




