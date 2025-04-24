# REST

REST (Representational State Transfer) is an architectural style used for designing networked applications, particularly web services. It defines a set of constraints and principles that allow systems to communicate over HTTP in a stateless, scalable, and reliable way.

Key Concepts of REST:
Stateless: Each request from the client to the server must contain all the information needed to understand and process the request. The server does not store anything about the client session.

Client-Server Architecture: The client and server are separate entities. The client sends requests, and the server provides responses. This separation allows for scalability and independent development.

Resources: Everything in REST is considered a resource (e.g., user, post, image), and each resource is identified by a unique URI (Uniform Resource Identifier), like /users/1.

HTTP Methods:

GET: Retrieve a resource

POST: Create a new resource

PUT: Update an existing resource

DELETE: Remove a resource

PATCH: Partially update a resource

Representation: Resources are usually represented in formats like JSON or XML. Clients interact with resources using these representations.

Uniform Interface: RESTful APIs have a consistent structure, making them easy to understand and use. This includes using standard HTTP methods and consistent URL patterns.


A RESTful API for managing users might look like this:

GET /users → Get all users

GET /users/1 → Get user with ID 1

POST /users → Create a new user

PUT /users/1 → Update user with ID 1

DELETE /users/1 → Delete user with ID 1