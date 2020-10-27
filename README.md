# COVIDaily


## Description
**Student Solo Project**
**Duration:** 2 weeks

This app is a daily logger that logs vitals and symptoms and graphs out how different demographics, from weight range to AC system, are affected by COVID-19. The goal is to learn more about this virus and why people are affected so differently. Up to [80%](https://www.health.harvard.edu/blog/the-tragedy-of-the-post-covid-long-haulers-2020101521173) of all COVID-positive people are known as long-haulers, where they may suffer months to years and may have permanent internal scarring from this virus from their hearts to their kidneys. By logging their vitals and seeing how they deal with their symptoms, react to medications and treatment, we can then hope to come up with solutions.

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
3. Make a new database in postgresql called **covidaily** and copy data from `covidaily.sql`
4. Start postgres with `brew services start postgresql`
5. Run `npm run server`
6. Run `npm run client`
7. Navigate to localhost:3000 on your browser


## 



## 




