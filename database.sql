CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" varchar (200) UNIQUE NOT NULL,
"password" varchar (200) NOT NULL,
"phone" text,
"email" text
);

INSERT INTO "user" ("username", "password", "phone", "email") 
VALUES ('chrisdev','dev','555-555-555','dev@testmail.com');



CREATE TABLE "month_list" (
    "id" SERIAL PRIMARY KEY,
    "month_name" character varying(200)
);

INSERT INTO "month_list" ("month_name") 
VALUES ('January'), ('February'), ('March'), ('April'), ('May'), ('June'), ('July'), ('August'), ('September'), ('October'), ('November'), ('December');



CREATE TABLE "wallet" (
    "id" integer DEFAULT PRIMARY KEY,
    "income" numeric,
    "user_id" integer NOT NULL REFERENCES "user"(id),
    "month_id" integer REFERENCES month_list(id),
    "post_date" date NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO "total_budget" ("total_amount" ,"user_id" ,"month_id")
VALUES ('1000.00', '1', '1');



CREATE TABLE "transaction_category" (
"id" SERIAL PRIMARY KEY,
"category_name" text
);

INSERT INTO "transaction_category" ("category_name") 
VALUES ('Automotive'), ('Bills'), ('Entertainment'), ('Food & Dining'), ('Investments'), ('Groceries'), ('Shopping'), ('Pets'), ('Self-Care'), ('Utilities'), ('Transportation'), ('Gas'), ('Savings');



CREATE TABLE "month_goal" (
    "id" integer DEFAULT nextval('user_budget_goal_id_seq') PRIMARY KEY,
    "user_id" integer REFERENCES "user"(id),
    "month_id" integer REFERENCES month(id),
    "category_id" integer REFERENCES transaction_category(id),
    "amount" numeric,
    "date" date
);



CREATE TABLE "transaction" (
"id" SERIAL PRIMARY KEY,
"item_name" TEXT,
"amount" NUMERIC, 
"date" DATE NOT NULL DEFAULT CURRENT_DATE,
"category_id" INT REFERENCES "transaction_category",
"user_id" INT REFERENCES "user"
);

INSERT INTO "transaction" ("item_name","amount","category_id","user_id") 
VALUES ('gas', '23.74', '12', '1'), ('groomers', '105.99', '8', '1')


-- To do: Insert new test data for month_goal table