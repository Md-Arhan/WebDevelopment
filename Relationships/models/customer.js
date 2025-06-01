const mongoose = require("mongoose");
const { Schema, model } = mongoose;
//{} in this context = destructuring an object
/*const { Schema, model } = mongoose;
Now you can use Schema and model directly without writing mongoose.Schema or mongoose.model every time. */

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main()
  .then((res) => {
    console.log("connected");
}).catch((err) => console.log(err));


// One to Many
const orderSchema = new Schema({
  items: {
    type: String,
  },
  price : Number,
});

const customerSchema = new Schema({
    username: String,
    order: [
        {
            type : Schema.Types.ObjectId,
            ref : "Order"
        }
    ]
})

const Order = model("Order", orderSchema);
const Customer = model("Customer", customerSchema);

const addCustomer = async () => {
    let cust1 = new Customer(
        {
            username : "arhan", 
        }
    );
    let order1 = await Order.findOne({items : "Samosa"})
    let order2 = await Order.findOne({items : "Chocolate"});

    cust1.order.push(order1);
    cust1.order.push(order2);


    let res = await cust1.save();
    console.log(res);
}

const findCustomer = async () =>{
    let res = await Customer.find({}).populate("order");
    console.log(res);
}

findCustomer();

// const addOrder = async () =>{
//    let res = await Order.insertMany([
//     { items : "Samosa", price : 12},
//     { items : "Chai", price : 10},
//     { items : "Chocolate", price : 20},
//     { items : "coffee", price : 40},
//    ])
//    console.log(res);
// }

// addOrder();
// addCustomer();