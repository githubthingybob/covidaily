CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE "user"
(
  "id" serial primary key,
  "username" VARCHAR (200) UNIQUE NOT NULL,
  "email" CITEXT UNIQUE DEFAULT 'N/A',
  "password" VARCHAR (1000) NOT NULL,
  "covid" boolean,
  "covid_symptoms" boolean,
  "cigarettes" boolean,
  "vitamins" boolean,
  "insurance" boolean,
  "children" boolean,
  "negative" boolean,
  "personality" varchar (50) DEFAULT 'N/A',
  "AC" varchar (50) DEFAULT 'N/A',
  "residence" varchar (100) DEFAULT 'N/A',
  "water" varchar (100) DEFAULT 'N/A',
  "race" varchar (100) DEFAULT 'N/A',
  "development" varchar (100) DEFAULT 'N/A',
  "visits" varchar (50) DEFAULT 'N/A',
  "sex" varchar (20) DEFAULT 'N/A',
  "age" varchar (20) DEFAULT 'N/A',
  "income" varchar (100) DEFAULT 'N/A',
  "social" varchar (50) DEFAULT 'N/A',
  "weight" varchar (50) DEFAULT 'N/A'
);

CREATE TABLE "daily_logs" (
"id" SERIAL PRIMARY KEY,
"date" DATE,
"user_id" INT REFERENCES "user",
"oximeter" INT,
"temperature" INT,
"systolic" INT,
"diastolic" INT,
"treatment" TEXT [],
"treatment_not_listed" text,
"feelings" varchar (20),
"reactions" TEXT [],
"reactions_not_listed" text,
"symptoms" text [] DEFAULT,
"symptoms_not_listed" text
);