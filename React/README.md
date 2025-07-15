# React
In React, a component is a reusable piece of UI that can be rendered and updated independently. Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

In React, "render" means displaying something on the screen—turning your component (written in JavaScript/JSX) into actual HTML that the user sees in the browser.

🔍 In Simple Terms:
Rendering is the process of generating and displaying the UI.


# vite v/s create-react-app

| Feature                            | **Vite**                                                    | **Create React App (CRA)**                    |
| ---------------------------------- | ----------------------------------------------------------- | --------------------------------------------- |
| **Startup Speed**                  | ⚡ *Instant (uses native ES Modules)*                        | 🐢 *Slower (bundles everything upfront)*      |
| **Build Tool**                     | [esbuild](https://esbuild.github.io/) / Rollup (super fast) | Webpack (older, slower)                       |
| **Hot Reload (HMR)**               | ⚡ Super fast                                                | Slower, especially in large apps              |
| **Initial Bundle Time**            | Very low – loads only what’s needed                         | Full app bundle even during development       |
| **Customization**                  | Easier with plugins and config                              | Harder – requires `eject` to deeply configure |
| **Modern Features**                | Native support for TypeScript, JSX, Vue, etc.               | Needs config and plugins for many things      |
| **File Watching (Large Projects)** | Efficient & stable                                          | Can lag/crash on large codebases              |
| **Tree-Shaking**                   | Optimized via Rollup                                        | Less efficient with Webpack in dev            |




# () => deleteNewTodo(ele.id)
This creates a new function that, when called, will run deleteNewTodo(ele.id).

When you do this:

onClick={() => deleteNewTodo(ele.id)}
You're saying:

"Hey React, when this button is clicked, please run this function."

You're not calling it immediately — you're passing a reference to a function

# What Actually Happens:
prev.map(...) runs — this loops through the current array (prev) once.
For each todo:
It spreads the object (...todo) to copy all properties
It updates task to todo.task.toUpperCase()
It creates a new object
After looping, .map() returns a new array with all these updated objects.
That new array is passed to setMessage(...).
React replaces the entire old array with this new one in state.


# Components types

* Presentational Components (aka UI or Dumb Components)
These focus only on how things look (UI), not on how they work (logic or data). They:
Receive data and callbacks via props
Are often stateless (or use minimal internal state)
Use mostly HTML/CSS and JSX
Are easy to reuse, test, and style

* Logical Components (aka Container or Smart Components)
These handle the data, state, and business logic. They:
Manage state using useState, useEffect, or data fetching
Decide what data to pass to presentational components
Often don't render HTML directly
Are usually not styled