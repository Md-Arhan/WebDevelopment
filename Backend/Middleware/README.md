# sync and Async
In synchronous code, Express automatically catches thrown errors and forwards them to your error-handling middleware. So you can just throw new Error() — no need to call next(err) unless you prefer that pattern.

✅ Synchronous Middleware Example:

app.use((req, res, next) => {
  const userLoggedIn = false;

  if (!userLoggedIn) {
    // Directly throw the error — Express will catch it
    throw new Error('User must be logged in');
  }

  next();
});
Express will catch the thrown error and pass it to your error-handling middleware like:

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: err.message });
});


🧠 BUT: In async functions, throw doesn’t work the same way
In async functions, if you just throw, Express won’t catch it unless you try...catch and next(err):

app.use(async (req, res, next) => {
  try {
    await someAsyncFunction();
  } catch (err) {
    next(err); // Required in async
  }
});
That’s why in async, you must use next(err), but in sync, throw works just fine.

