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
        required : true
    },

    author:{
        type:String
    },

    price : {
        type:Number
    }
}) 


const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({title:"mathematics", author: "arhan", price: 123});
let book1 = new Book({title:"mathematics", author: "arhan", price: "123"});

book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
});