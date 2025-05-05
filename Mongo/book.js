//Schema Validations

const mongoose = require("mongoose");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

main().then((res) =>{
    console.log("Connected");
}).catch((err) => {
    console.log(err);
})

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true,
        maxLength :20
    },

    author:{
        type:String
    },

    price : {
        type:Number,
        min : [1, "Price is to low for amazon selling"] // minprice , "custom error"
    },
    discount:{
        type:Number,
        default : 0,
    },
    category:{
        type:String,
        enum: ['fiction',"non-fiction"]
    },
    genre:["comics", "superhero", "fiction"]
}) 


const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("681894a1ac52f2312026e67c", {price : -2}, {runValidators : true, returnDocument : "after"}).then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err.errors.price.properties.message);
})

// let book1 = new Book({title:"mathematics", author: "arhan", price: 123});
// let book1 = new Book({title:"mathematics", author: "arhan", price: "123"});
// let book2 = new Book({title:"Science", author: "----", price: "1230", category:"fiction"});

// book2.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err)
// });