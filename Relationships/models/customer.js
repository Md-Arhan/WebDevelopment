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
            type : Schema.Types.ObjectId,    //bu deafult it stores only objectId bcz we have defind, even though in terminal shows full object 
            ref : "Order"    // in order doc, refering to a specific docs
        }
    ]
});

//Middlewares
customerSchema.pre("save", async () => {
  console.log(" Customer saving...");
});

orderSchema.pre("save", async () => {
  console.log(" Order saving...");
});

customerSchema.post("findOneAndDelete", async (data) => {  //post middleware will have all the access of deleted data
   /*You're referring to a document whose _id field has the value data.order.
data.order is expected to be a variable or property in your code (for example, in Node.js) that contains the actual value you want to match against the _id. */
  if(data.order.length > 0){
    let res = await Order.deleteMany({_id : {$in : data.order}})
    console.log(res);
  }
  /*If data.order is a single value (like a string or ObjectId), this works fine. ✅
But if data.order is an array of values, it won't work correctly without $in. ❌
Key is the field name in the document.
Value is what you're trying to match or assign.
 */
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

//adding orders

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

//Functions
const findCustomer = async () =>{
    let res = await Customer.find({}).populate("order");  //populate must be no longer with ObjectId, we use to extract all data
    console.log(res[0].order[0].items);
}

//adding functions :  

const addCust = async () => {
  let newCus = new Customer({
    name: "KaranArjun",
  })

  let newOrder = new Order({
    items: "Burger",
    price: 250
  });

  newCus.order.push(newOrder);

  await newOrder.save();
  await newCus.save();

  console.log("added new Customer")
}

//deleting function:

const delCust = async () => {
   let data = await Customer.findByIdAndDelete("683d627439d3fabc89020787");
   console.log(data);
}

addCust();
// findCustomer();
// delCust();  