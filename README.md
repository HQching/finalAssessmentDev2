# finalAssessmentDev2

1) Build a database for the following
```sqlite 
CREATE TABLE customer (
  email VARCHAR(32) PRIMARY KEY,
  name VARCHAR(32) NOT NULL
  pwd VARCHAR(10)
);

CREATE TABLE item (
  id CHAR(6) PRIMARY KEY CHECK (length(id)=6),
  name VARCHAR(32) NOT NULL,
  price NUMERIC CHECK (price>=0)
);

CREATE TABLE shop_order (
  id CHAR(7) PRIMARY KEY,
  custEmail VARCHAR(32) REFERENCES customer(email),
  itemID CHAR(6) REFERENCES item(id),
  quantity INTEGER CHECK (quantity > 0),
  address VARCHAR(128) NOT NULL,
  order_date DATE NOT NULL,
  shipping_date DATE CHECK (shipping_date >= date OR shipping_date IS NULL)
 );
```
2. [BACKEND] State any 5 API Specs in a Word Document. [Follow the structure given in the
Slides]
a. Should demonstrate CRUD operations
b. Should exhibit multi-table query or joins

3. [BACKEND] Implement the API with Express/NodeJS.
