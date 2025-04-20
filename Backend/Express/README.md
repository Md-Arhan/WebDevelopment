# About Express

Express (or Express.js) is a web application framework for Node.js that makes it easier to build server-side applications and APIs.

Node.js lets you run JavaScript on the server.
Express helps you organize your server code and handle requests/responses easily.

Function	               Belongs to	            Purpose
listen()	               app (Express instance)	Starts the server
send(), json(), status()   res (response object)	Sending a response
body, params, query        req (request object)	    Receiving data from request


# Core Methods of app

Method                       	    Description
app.listen(port, callback)   	    Starts the server
app.get(path, callback)	            Handles GET requests
app.post(path, callback)	        Handles POST requests
app.put(path, callback)	            Handles PUT requests
app.delete(path, callback)   	    Handles DELETE requests
app.patch(path, callback)	        Handles PATCH requests
app.all(path, callback)     	    Handles all HTTP methods
app.use(middleware)         	    Adds middleware to the app
app.route(path)             	    Creates chainable route handlers
app.param(name, callback)	        Defines middleware for route parameters
app.render(view, options, callback)	Renders a view using a template engine
app.set(name, value)	            Sets a setting (like 'view engine')
app.get(setting)	                Gets a setting’s value
app.engine(ext, callback)        	Registers a new template engine
app.disable(setting)	            Disables a setting
app.enable(setting)	                Enables a setting
app.enabled(setting)	            Checks if a setting is enabled
app.disabled(setting)	            Checks if a setting is disabled
app.locals	                        An object for app-level locals (useful in views)


# HTTP Methods (app.VERB)

Method	      What it does
app.get()	  Handle GET
app.post()	  Handle POST
app.put()     Handle PUT
app.delete()  Handle DELETE
app.patch()   Handle PATCH
app.all()	  Handle all methods


# Middleware Related

Method	    Description
app.use()	Register global or route-specific middleware
app.param()	Modify request object for route parameters
app.route()	Group routes for the same path



# Template Engine Related

Method	                            Description
app.set('view engine', 'ejs')	    Set the view engine
app.set('views', 'path/to/views')	Set the views directory
app.render(view, options, callback)	Render a view



# Settings Methods

Method	                Description
app.set(name, value)	Set a setting
app.get(name)	        Get a setting
app.enable(name)	    Enable a setting
app.disable(name)	    Disable a setting
app.enabled(name)	    Check if a setting is enabled
app.disabled(name)	    Check if a setting is disabled



# App Properties

Property	    Description
app.locals	    Stores variables accessible in templates
app.mountpath	The path where the app is mounted (if it's a sub-app)
app.settings	Contains all the settings (view engine, etc.)
app._router	    Contains the internal router instance (advanced use)



# app.use()

In Express.js, app.use() is used to mount middleware functions or entire routers.

When a request hits your server (like visiting /home or calling /api/login), Express goes through all the functions you added using app.use() in the order they were written, before sending any response.

“Run this function (middleware) for every request (or for a specific path), before reaching the route handlers.”

Middleware functions are functions that have access to:

the request object (req)
the response object (res)
and the next() function.

They're used to perform tasks like logging, parsing, authentication, etc., before the request reaches your route handler.

app.use([path], middlewareFunction);
app.use(express.json()); // parses JSON request bodies

req	Holds incoming request data.
res	Used to send response back.

# req – The Request Object

req stands for Request — it contains all the info sent by the client (browser, Postman, etc.) when making a request to your server.

Common req Properties:

Property	Description

req.params	URL parameters (e.g., /user/:id)
req.query	Query string parameters (?search=term)
req.body	Data sent in the body (POST/PUT requests)
req.headers	Metadata like Content-Type, Authorization, etc.
req.method	HTTP method (GET, POST, PUT, DELETE, etc.)
req.url	The full URL path requested
req.path	Just the path (no query string)
req.cookies	Parsed cookies (if cookie-parser is used)
req.ip	    Client IP address


# res – The Response Object

res stands for Response — it’s what you use to send data back to the client.

Common res Methods:

Method	Description
res.send()	Sends a response (text, object, HTML, etc.)
res.json()	Sends a JSON response
res.status()	Sets the HTTP status code
res.redirect()	Redirects to another URL
res.render()	Renders a view template (like EJS)
res.set() or res.header()	Sets response headers
res.end()	Ends the response (usually used in low-level logic)




# app.get()

app.get() Overview:
In Express, app.get() is used to define a route handler for GET requests. This means that when someone sends a GET request to a specific route (path), Express will execute the corresponding callback function that you've defined in app.get().

path: The URL path or route you want to handle (e.g., /, /about, etc.).

callback: A function that gets executed when the route is matched. It receives two arguments:

req: The request object, which contains details about the incoming request.

res: The response object, used to send the response to the client

# app.post

In Express, app.post() is used to handle POST requests. This method is often used when you want to submit data from a client (such as a form submission) to the server, which typically involves actions like creating new resources, processing data, or performing operations on a database.

app.post(path, callback);
path: The URL path that the POST request is targeting (e.g., /submit, /login).

callback: A function that will be executed when the route matches a POST request. It takes two parameters:

req: The request object that contains the data sent in the request body (typically from a form or API call).

res: The response object used to send a response back to the client.


# Path Paramter

a path parameter is a variable part of the URL that is defined in the route path. These parameters allow you to create dynamic routes that can handle different values in specific parts of the URL.

**Path parameters are defined by prefixing a colon (:) to a segment of the URL. This allows you to access dynamic values within that segment. For example, if you define a route like /user/:id, the :id part is a path parameter that can be replaced with any value (e.g., /user/123).

The URL /user/:id has a path parameter id.

If a request is made to /user/123, the req.params.id will contain the value 123, and the server will respond with User ID: 123.

**How to Access Path Parameters:
Path parameters are accessible through the req.params object. Each parameter is stored as a key-value pair, where the key is the parameter name, and the value is the value passed in the URL.


# Query setting

n Express, query settings refer to working with query parameters — the key-value pairs appended to the URL after a ?. These are commonly used to filter, sort, or search data.

http://localhost:3000/search?term=apple&page=2
In this example:

term is a query parameter with value apple
page is a query parameter with value 2

app.get("/search", (req, res) => {
  const searchTerm = req.query.term;
  const pageNumber = req.query.page;
  
  res.send(`Search term: ${searchTerm}, Page: ${pageNumber}`);
});


Query Parameters vs Path Parameters

Feature         	Path Parameter (:id)	Query Parameter (?key=value)
In URL structure	    /user/:id	              /user?id=123
Access with	            req.params	              req.query
Use case	        Specific resource	    Filters, pagination, search


Use req.query to access query params.
It's perfect for search, filter, sort, paginate.
Example: req.query.term, req.query.page