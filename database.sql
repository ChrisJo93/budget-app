CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" varchar (200) UNIQUE NOT NULL,
"password" varchar (200) NOT NULL,
"phone" text,
"email" text
);

INSERT INTO "user" ("username", "password", "phone", "email") 
VALUES ('chrisdev','dev','555-555-555','dev@testmail.com');


CREATE TABLE "month" (
"id" SERIAL PRIMARY KEY,
"month_name" varchar (200)
);

INSERT INTO "month" ("month_name") 
VALUES ('January'), ('February'), ('March'), ('April'), ('May'), ('June'), ('July'), ('August'), ('September'), ('October'), ('November'), ('December');

CREATE TABLE "user_total_budget" (
"id" SERIAL PRIMARY KEY,
"total_amount" NUMERIC,
"user_id" INT REFERENCES "user" NOT NULL,
"month_id" INT REFERENCES "month"
);

INSERT INTO "user_total_budget" ("total_amount" ,"user_id" ,"month_id")
VALUES ('1000.00', '1', '1');

CREATE TABLE "transaction_category" (
"id" SERIAL PRIMARY KEY,
"category_name" text
);

INSERT INTO "transaction_category" ("category_name") 
VALUES ('Automotive'), ('Bills'), ('Entertainment'), ('Food & Dining'), ('Investments'), ('Groceries'), ('Shopping'), ('Pets'), ('Self-Care'), ('Utilities'), ('Transportation'), ('Gas'), ('Savings');

CREATE TABLE "user_budget_goal" (
"id" SERIAL PRIMARY KEY,
"goal_name" text,
"user_id" INT REFERENCES "user",
"month_id" INT REFERENCES "month",
"category_id" INT REFERENCES "transaction_category",
"amount" NUMERIC 
);

INSERT INTO "user_budget_goal" 
("goal_name" , "user_id" , "month_id" , "category_id" , "amount")
VALUES ('Owed Bill for take out', '1', '1', '4', '45.00');