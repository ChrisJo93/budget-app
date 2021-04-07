CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" varchar (200) UNIQUE NOT NULL,
"password" varchar (200) NOT NULL,
"phone" text,
"email" text
);

CREATE TABLE "month" (
"id" SERIAL PRIMARY KEY,
"month_name" varchar (200)
);

CREATE TABLE "user_total_budget" (
"id" SERIAL PRIMARY KEY,
"total_amount" NUMERIC,
"user_id" INT REFERENCES "user" NOT NULL,
"month_id" INT REFERENCES "month"
);

CREATE TABLE "transaction_category" (
"id" SERIAL PRIMARY KEY,
"category_name" text
);

CREATE TABLE "user_budget_goal" (
"id" SERIAL PRIMARY KEY,
"goal_name" text,
"user_id" INT REFERENCES "user",
"month_id" INT REFERENCES "month",
"category_id" INT REFERENCES "transaction_category",
"amount" NUMERIC 
);