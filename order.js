// This file will contain the queries to the orders table
const database = require("./database");
const express = require("express");

// Allows us to define a mapping from the URI to a function
router = express.Router();

// API 1: IsCustEmailExist
router.get("/customer", (request, response) => {
  database.connection.all(`select count(*) as isExisting from customer where email ='${request.query.cemail}'`,
   (errors, results) => { 
    if (errors) {
      response.status(500).send("Some error occurred");
    } else {
      response.status(200).send(results);
    }
  });
});

// API 2: AddCust
router.post("/customer/add", (request, response) => {
  database.connection.all(
    sqlstr =`insert into customer (email, name) values ('${request.body.cemail}','${request.body.cname}')`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred" + sqlstr);
      } else {
        response.status(200).send("Record inserted successfully!");
      }
    });
});

// API 3: GetOrderByCust
router.get("/order/cust", (request, response) => {
  database.connection.all(sqlstr =`select c.name AS custName, i.name AS itemName, s.quantity, s.shipping_date from customer c left join shop_order s on c.email = s.custEmail left join item i on s.itemID = i.id where c.email = '${request.query.cemail}'`,
  (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred " + sqlstr);
    } else {
      response.status(200).send(results);
    } 
  });
});

// API 4: DeleteOrderById
router.delete("/order/delete", (request, response) => {
  database.connection.all(`delete from shop_order where id = '${request.query.sid}'`,
  (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred");
    } else {
      response.status(200).send("Record deleted successfully");
    }
  });
});

// API 5: UpdateItemPrice
router.put("/item/price", (request, response) => {
  database.connection.all(`update item set price = ${request.body.iprice} where id = '${request.body.iid}'`,
  (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred");
    } else {
      response.status(200).send("Record updated successfully");
    }
  });
});

module.exports = {
  router,
};
