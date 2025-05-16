# ERROR MIDDLEWARE

Express treats any middleware with four arguments as error-handling middleware and calls it automatically whenever you call next(err) or throw an error in async code wrapped properly.

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
});

This is an Express error-handling middleware because it has 4 parameters.

Express will invoke this middleware only if next(err) is called with an error.

If this middleware is missing or misplaced, Express will fallback to its default error handler (which prints the stack trace you saw).

# What is a Stack Trace?
A stack trace is a report that shows the sequence of function calls that the program was executing at the moment an error occurred.

Why is it useful?
It helps you see exactly where and how an error happened.

It shows the chain of function calls leading to the error.

This lets developers quickly pinpoint the source of bugs in the code.

* The stack trace is provided by the JavaScript engine itself (Node.js or the browser's JS engine), not by Express.



# Here’s the crucial part:
1. In synchronous route handlers (normal functions), if you throw an error, Express automatically catches that error and passes it to the error-handling middleware.
So this works:

app.get("/chats/new", (req, res) => {
  throw new ExpressError(404, "page not foound");  // Express catches this
  res.render("new.ejs");
});

2. In asynchronous route handlers (async functions), if you throw an error inside the async function, Express does NOT catch it automatically because the error happens inside a Promise. You must catch the error and call next(err) explicitly, or use a helper to do it for you.

# Synchronous

* The throw immediately creates an ExpressError object, which is an instance of JavaScript’s built-in Error.

At the moment of creation, Node.js (the V8 engine) generates the stack trace and attaches it to the error object's .stack property.

Because this is a synchronous throw inside a route handler, Express automatically catches this error and passes it to the error-handling middleware.

# Asynchronous

The throw inside the async function becomes a rejected Promise.
Express does NOT catch it automatically.
The error is not passed to your error-handling middleware.
Stack trace shows up in the terminal, but it does NOT go through your error middleware.
You may get a console warning like:UnhandledPromiseRejectionWarningstac

With next();
Error is caught in the catch block.
Passed to Express using next(err).
Your error-handling middleware is called:


# Asyncwrap

Dry Run (Step-by-step execution)
Request made to GET /test

The route handler is:

asyncWrap(async (req, res) => {
  throw new Error('Something went wrong!');
})
asyncWrap() receives the async function and returns a new function:

function (req, res, next) {
  fn(req, res, next).catch((err) => next(err));
}
That new function is called by Express with req, res, and next.

Inside that function:

fn(req, res, next) is called — it's the original async route.

That throws an error: Error('Something went wrong!')

.catch((err) => next(err)) catches it and passes it to next(err)

Express sees the error and calls the custom error handler middleware:

app.use((err, req, res, next) => {
  res.status(500).send(`Error: ${err.message}`);
});
Response sent:

500 Internal Server Error
Error: Something went wrong!

# working

1. Express sees this:

app.get("/chats/:id", asyncWrap(handler));
Where handler is:

async (req, res, next) => {
  const chat = await Chat.findById(req.params.id);
  if (!chat) return next(new ExpressError(404, "Chat not found"));
  res.render("edit.ejs", { chat });
}
2. asyncWrap(handler) runs:

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}
fn is your route handler

Returns a new function

Express stores that new function in its internal routing system

3. A request comes in for /chats/:id
Express calls the returned function:

(req, res, next) => {
  fn(req, res, next).catch((err) => next(err));
}
4. That calls your original async handler:

fn(req, res, next)
If the await inside fn() succeeds, it renders the page

If there's an error (e.g., Mongoose fails or throws), it goes to:

.catch((err) => next(err));
So it automatically passes the error to Express's error handling middleware.



# err.name

asyncWrap relies on .catch() of the Promise returned by the async function

When you write:
fn(req, res, next).catch(err => next(err));
You're catching rejected Promises properly.

The error you get here is the actual Error object thrown inside the async function (or returned as a rejected Promise).

In contrast, try...catch can fail if you don’t await a Promise

If you write:
try {
  someAsyncFunction();  // forgot to await
} catch(err) {
  // won't catch async errors
}
The error happens outside the synchronous try block and won’t be caught.

So you don’t get the Error object inside the catch.

asyncWrap enforces you work with the Promise properly

Since it calls fn(...).catch(...), it catches any rejection properly.

That means the error passed to next(err) is the actual error object with all properties like .name.

# What asyncWrap is:
A utility function (middleware wrapper) that catches errors from async route handlers (Promises) and passes those errors to Express’s error handler by calling next(err).

It’s not the error handler itself, but a helper to make sure errors inside async functions don’t get missed.

