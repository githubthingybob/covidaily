# COVIDaily
![Image of COVIDaily](/Users/sa/Documents/Prime/covidaily/covidaily homepage.png)
## Description
**Student Solo Project**
**Duration:** 2 weeks

This app is a daily logger that logs vitals and symptoms and graphs out how different demographics, from weight range to AC system, are affected by COVID-19. The goal is to learn more about this virus and why people are affected so differently. The amount of longer-haulers (people who suffer weeks to months and may have permanent internal scarring) is unknown.

A UK study says [10%](https://www.bmj.com/content/370/bmj.m3026) of COVID-positive people are long-haulers. Another study says [50% to 80%](https://www.health.harvard.edu/blog/the-tragedy-of-the-post-covid-long-haulers-2020101521173) of COVID-positive people are known as long-haulers. The definition of long-haulers has not been set in stone across countries and therefore, the studies done cannot be compared to each other if they all have different definitions.

The point is that these people exist and these people may recover after years or may never recover, the long-term effects of COVID-19 on the population will greatly damage our society as these people may be unable to work for years. The tragedy of this population cannot be understated.

By logging their vitals and seeing how they deal with their symptoms, react to medications and treatment, we can then hope to come up with solutions for COVID-19.

**Skills Practiced:** Full stack integration, Node, PostgresSQL, React, Redux, Sagas, Passport, Express, Chartjs, MaterialUI, COVID Tracking API. Javascript, HTML, remote presentation, public speaking skills

**Hardest Challenges During Student Project:** Time management, Learning Chartjs and React Hooks

**Goal:** Make a compatible mobile version



## Prerequisites To Installing

This app uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Set Up Instructions to Installing
1. Run `npm install`
2. Create a .env file at the root of the project and paste this line into the file: SERVER_SESSION_SECRET=superDuperSecret
    - While you're in your new .env file, take the time to replace superDuperSecret with some long random string to keep your application secure. [PasswordGenerator](https://passwordsgenerator.net/) 
    - If you don't do this step, create a secret with less than eight characters, or leave it as superDuperSecret, you will get a warning.
3. Make a new database in postgresql called **covidaily** and copy data from `covidaily.sql`
4. Start postgres with `brew services start postgresql`
5. Run `npm run server`
6. Run `npm run client`
7. Navigate to localhost:3000 on your browser