# EJS

EJS (Embedded JavaScript) is a template engine package for Node.js — and it's super handy when you're building server-rendered web pages with Express.

EJS = Embedded JavaScript Templates

It lets you:

Write HTML with JavaScript logic embedded inside.
Dynamically render data from the backend into HTML views.
Use conditions (if), loops (forEach), and pass variables directly from Express.


app.set("view engine", "ejs") — Explained
app.set(...): This is how you configure settings in your Express app.

"view engine": This tells Express which templating engine you want to use.

"ejs": The name of the engine you're using (in this case, EJS).

By setting this, Express knows to:

Automatically look for .ejs files when you call res.render().

Automatically render those files using the EJS engine.

# Changing directory

By default, Express looks for views in a folder named views at the root of your project.

So, if you don’t change anything, the default behavior is this:

If you decide to create a folder with a custom name for your EJS views (i.e., something other than the default views folder), you can tell Express where to find that folder using app.set('views', 'path-to-your-folder').

app.set('views', './templates');



# app.set

What is app.set in Express?
app.set(name, value) is a function provided by Express to store and retrieve configuration settings.

Think of it like setting a "global config variable" inside your app.

app.set('settingName', 'settingValue');
settingName: The key or name of the setting.
settingValue: The value you want to assign.


# Common Uses of app.set

Setting Name	    Description
"view engine"	    Tells Express what template engine to use (like "ejs", "pug", etc.)

"views"	            Changes the folder where Express looks for view files (default is /views)

"port"	            Custom setting (not built-in) to store a port value

"trust proxy"	    Enables Express to trust the X-Forwarded-* headers (used in deployments like Heroku)


# exapmples

1. ✅ view engine — Using EJS for rendering templates

const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Tell Express to use EJS

app.get('/', (req, res) => {
  res.render('home', { name: 'Alex' }); // Renders views/home.ejs
});


2. 🗂️ views — Custom path for your templates

app.set('views', './templates'); // Use ./templates folder instead of ./views
Now Express will look for .ejs files in the templates folder.


3. 🌐 port — Custom port setting (not built-in behavior, just useful)

app.set('port', 4000); // Save port value

app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});
Even though Express doesn't automatically use this setting, you can retrieve it with app.get() like shown above.


4. 🔒 trust proxy — Useful when deploying (e.g., Heroku or behind Nginx)
app.set('trust proxy', true);

app.get('/', (req, res) => {
  const clientIP = req.ip; // Gets the correct IP even behind a proxy
  res.send(`Your IP is: ${clientIP}`);
});
Without trust proxy, req.ip might just return the proxy’s IP instead of the real client’s.

**What is trust proxy?
When your Express app is running behind a reverse proxy (like Nginx, or a platform like Heroku), the IP address you get from req.ip might not be the real user's IP address. Instead, you'll often get the IP of the proxy server itself.
This happens because the proxy (like Nginx or Heroku's load balancer) forwards the request to your app, but the original client's IP address is stored in a special HTTP header called X-Forwarded-For.

🔒 trust proxy Setting
What it does: By setting app.set('trust proxy', true);, you tell Express to trust the X-Forwarded-For header and use the actual client IP address instead of the proxy server’s IP.
When you need it: This is essential when your app is behind a reverse proxy (like when you deploy to Heroku or use Nginx as a proxy).

🚀 Example Scenario
Without trust proxy
Imagine your app is hosted on Heroku, and the user requests your site. Heroku sends that request to your Express app, but it also includes its own IP address as the X-Forwarded-For header. If you don't set trust proxy, req.ip will return Heroku's IP address, not the real user's IP.

With trust proxy
When you set app.set('trust proxy', true);, Express will use the IP from X-Forwarded-For and give you the real user's IP address.

5. If iam running my server from outside the folder then we have to install the package from node.js,  the package is require('path');

app.set('views', 'path-to-views-folder');

ex: const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

// Provide the correct path to the views folder using path.join()
app.set('views', path.join(__dirname, 'src', 'views'));

app.get('/', (req, res) => {
  res.render('home', { name: 'Coder' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

Why use path.join(__dirname, ...)?
__dirname gives the absolute path to the folder where server.js is located.

path.join(__dirname, 'src', 'views') safely builds the path no matter what OS you’re using (Windows/Linux/macOS).


 # Ways to Access Objects of Objects

For static property names (those that are hardcoded and known in advance), you use dot notation (.) because it's cleaner and easier to read:

const person = { name: "Alice", age: 25 };
console.log(person.name);  // Accesses 'name' property

For dynamic property names (those determined at runtime, like variables or path parameters), you use bracket notation ([]) because it allows you to evaluate expressions and access properties that are not fixed:

const person = { name: "Alice", age: 25 };
const key = "name";
console.log(person[key]);  // Accesses 'name' property using a variable


# Object.value() and Object.entries
const data = {
  john: {
    username: "john",
    followers: ["adam", "emma"],
    bio: "Photographer"
  },
  sara: {
    username: "sara",
    followers: ["liam", "noah"],
    bio: "Fitness Coach"
  }
};
1️⃣ Object.values(): Get all the values (user objects) in an array
This method returns an array of all the values from the object (in this case, the user objects).


const values = Object.values(data);
console.log(values);
Output:

[
  { username: 'john', followers: ['adam', 'emma'], bio: 'Photographer' },
  { username: 'sara', followers: ['liam', 'noah'], bio: 'Fitness Coach' }
]
What’s happening here?

Object.values(data) gives you an array of all user objects (john, sara) that are values in the data object.

2️⃣ Object.entries(): Get key-value pairs
This method returns an array of key-value pairs (in the form of [key, value]), where each key is the property name and value is the corresponding property value (the user object).

const entries = Object.entries(data);
console.log(entries);
Output:

[
  ['john', { username: 'john', followers: ['adam', 'emma'], bio: 'Photographer' }],
  ['sara', { username: 'sara', followers: ['liam', 'noah'], bio: 'Fitness Coach' }]
]
What’s happening here?

Object.entries(data) gives you an array of arrays, where each inner array has a key (like 'john', 'sara') and its corresponding value (the user object).

This is particularly useful when you need both the key and value in loops or when you need to manipulate both.