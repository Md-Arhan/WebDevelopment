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

const userShema = new Schema({
  user : String,
  email : String,
});

const postSchema = new Schema({
    content : String,
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    }
});

const User = model("User", userShema);
const Post = model("Post", postSchema);

const addData = async() => {
    // let user1 = new User({
    //     user : "rahulKumar",
    //     email : "rahul@gmail.com"
    // });

    let user1 = await User.findOne({user : "rahulKumar"});

    // let post1 = new Post({
    //     content:"hello world",
    //     likes : 8,

    // })

    let post2 = new Post({
        content:"Bye Bye",
        likes : 12,
    })

    // post1.user = user1;
    post2.user = user1;

    // await user1.save();
    // await post1.save();

    await post2.save();
}

// addData();

const getData = async () =>{
    let result = await Post.findOne({}).populate("user", "user");
    console.log(result);
}

getData();