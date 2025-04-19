# About README.md

A README.md is a Markdown file that acts as the homepage or introduction to your project.

1. Describes your project
2. Shows how to use it
3. Lists features or dependencies
4. Collaborator-friendly
5. Looks clean and formatted


# About Node.js

Node" usually refers to Node.js, which is a runtime environment that allows you to run JavaScript code outside of the browser — typically on the server side.

Here's a breakdown:
Name: Node.js

Built on: Chrome's V8 JavaScript engine

Purpose: Run JavaScript on the server

Use cases: Backend development, APIs, real-time applications (like chat apps), command-line tools, and more.

Key Features:
Non-blocking (asynchronous) I/O: Good for handling many requests at once.

Event-driven architecture: Efficient for real-time applications.

NPM (Node Package Manager): Huge ecosystem of libraries and packages.

Example Use Case:
Let’s say you're building a chat app (like you are). With Node.js, you can:

Set up a server

Handle user connections via Socket.IO

Store messages in MongoDB

Upload images using Cloudinary All while writing in JavaScript across the stack.




# About process.release

In Node.js, when an asynchronous operation is done (like reading a file or making an HTTP request), the underlying system releases the resource — meaning it's done being used — and then the callback is queued to run in the event loop.

Release : To free or give back resources that were previously acquired for an operation

**A phase in the libuv event loop (the engine Node.js uses to handle non-blocking I/O). More specifically, it can relate to:

Releasing resources or handles (e.g., file descriptors, sockets)

Clearing async operations after they are completed

Internals of how a request or operation finishes


**Node.js Event Loop Phases:
Node.js processes async code in phases:

Timers – setTimeout, setInterval

Pending Callbacks

Idle/Prepare

Poll – I/O events handled here

Check – setImmediate

Close Callbacks




# About Npm 

What is NPM?
NPM (Node Package Manager) is the default package manager for Node.js.

It is used to:

Install, share, and manage packages (modules/libraries)

Keep track of your project’s dependencies

Run project scripts (like npm start, npm test, etc.).


**npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.

npm consists of three distinct components:

the website
the Command Line Interface (CLI)
the registry
Use the website to discover packages, set up profiles, and manage other aspects of your npm experience. For example, you can set up organizations to manage access to public or private packages.

The CLI runs from a terminal, and is how most developers interact with npm.

The registry is a large public database of JavaScript software and the meta-information surrounding it.





# npm init Outupt Explained

npm init Output Explained
When you run npm init, it helps you create a package.json file, which is like the metadata file for your Node.js project. 

package name: (project2)
This is the name of your project/package.

It must be unique if you plan to publish to NPM.

Can include hyphens (my-awesome-app) but not capital letters or spaces.

🔹 version: (1.0.0)
The initial version of your project.

Follows semantic versioning: major.minor.patch

1.0.0 = first stable version

🔹 description: This is my first project
A short sentence explaining what your project does.

Shows up on NPM if you publish your package.

Helps other devs understand what it's about.

🔹 entry point: (index.js)
The main file that runs when your package is imported or executed.

Usually your starting file, like a server file in Express apps.

If you're building a library, this is the file Node will load.

 *git repository: (left blank)
If your project is in a GitHub repo, you can put the link here:

"repository": {
  "type": "git",
  "url": "https://github.com/your-username/your-repo-name.git"
}
🔹 keywords: (left blank)
A list of keywords to help people find your package on NPM (if published). Example:
"keywords": ["chat-app", "nodejs", "realtime"]
🔹 author: Arhan
Your name (or team name) as the project author.


🔹 license: (ISC)
This defines how others can legally use your code.

ISC is a permissive open-source license (default in npm)

You can change it to MIT, GPL, etc.


🔹 test command: (left blank)
Used for writing test scripts.

You can fill it later like:

json
Copy
Edit
"test": "node test.js"

A test is a small program that checks if your code is working correctly.

For example:

If you write a function that adds two numbers, a test would check if it really returns the correct sum.

This helps catch bugs early.




# About package-lock.json
"name": "project2",
"version": "1.0.0",
"lockfileVersion": 3,
"requires": true,

1. "name": "project2"
This is the name of your project.

It's usually the same as what you put in your package.json.

2. "version": "1.0.0"
This is the version of your project.

Again, matches the version from your package.json.

3. "lockfileVersion": 3
This is the version of the lockfile format.

Version 3 is used by npm v7 and above.

It’s just saying, “Hey, this lock file was made with npm v7+.”

4. "requires": true
This indicates that the root project has dependencies.

It helps npm know whether it should look for required packages.


** It records the exact versions of every package (and sub-dependency) installed.

This ensures consistent installs across different environments (like your laptop and a friend's machine).

You don’t need to edit this file manually.



# Installing Packages globally

Sometimes you might get a permission error. In that case, prepend sudo:

sudo npm install -g <package-name>


To install packages globally using npm, you just need to add the -g flag when installing. Here's the syntax:

npm install -g <package-name>


To link with the pakage 

npm link <package-name>



# import and export in node (ES6)

"type" in package.json

{
  "type": "module"
}
This tells Node:
.js files should be treated as ES modules
You must use import/export syntax
You must include file extensions in imports (./math.js ✅, ./math ❌).

** Without "type": "module" (default is CommonJS):
If you don’t define "type" in package.json, Node assumes:

{
  "type": "commonjs"
}
That means:
You use require() and module.exports
You don’t need to include .js extension
import/export syntax will throw an error

** You must include the file extension (like .js) when using import in Node.js (ES Modules):





# CRLF and LF

**What is CRLF and LF?
They're just different ways of saying "new line" in a file.


System	          Line Ending 	Characters	Meaning
Windows         	  CRLF       	  \r\n	    Carriage Return + Line Feed
Unix/Linux/macOS	  LF           	\n	      Line Feed only

This means:
Your file currently uses Windows-style (CRLF) line endings.
Git will convert them to Unix-style (LF) when it saves or commits.
It’s just a warning, not an error — nothing is broken.


** Why does this happen?
Git has a setting called core.autocrlf, which controls how line endings are handled.

On Windows, core.autocrlf is usually set to true:

Git converts LF → CRLF when you check out files

And CRLF → LF when you commit them

This keeps line endings consistent in the repo (LF), but still works for you on Windows (CRLF).