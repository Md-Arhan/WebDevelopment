const mongoose = require("mongoose");
const {Schema, model} = mongoose;
//{} in this context = destructuring an object
/*const { Schema, model } = mongoose;
Now you can use Schema and model directly without writing mongoose.Schema or mongoose.model every time. */

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().then((res) =>{
    console.log("connected")
}).catch(err => console.log(err));

//Schema - (One to few)

const userSchema = new Schema({
    username :{
        type: String,
    },
    
    addresses :[
        {
            _id:false,  //for schema level
            location : {
                type : String,
                require : true
            },
            city:{
                type:String,
                require:true
            }
        }
    ]
})

const User = model("User", userSchema);

const addUser = async () => {
    let user1 = new User({
        username : "Arhan",
        addresses:[
            {
                location:"221B Baker Street",
                city : "bangalore",
            }
        ],
    })

    user1.addresses.push({location:"P32 WallStreet", city: " Delhi"});
    let res = await user1.save();
    console.log(res);
}

addUser();