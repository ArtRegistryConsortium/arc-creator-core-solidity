# Your Privacy
This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
DenyAccept all
Consent Settings
Privacy Policy
Your Privacy
This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
Marketing
Off
Marketing cookies and services are used to deliver personalized advertisements, promotions, and offers. These technologies enable targeted advertising and marketing campaigns by collecting information about users' interests, preferences, and online activities. 
Analytics
Off
Analytics cookies and services are used for collecting statistical information about how visitors interact with a website. These technologies provide insights into website usage, visitor behavior, and site performance to understand and improve the site and enhance user experience.
Functional
Off
Functional cookies and services are used to offer enhanced and personalized functionalities. These technologies provide additional features and improved user experiences, such as remembering your language preferences, font sizes, region selections, and customized layouts. Opting out of these cookies may render certain services or functionality of the website unavailable.
Essential
On
Essential cookies and services are used to enable core website features, such as ensuring the security of the website. 
SaveDenyAccept all
Privacy Policy
Menu
Using App Router
Features available in /app
Using Latest Version
15.1.7
Using App Router
Features available in /app
Using Latest Version
15.1.7
App RouterBuilding Your ApplicationRendering
# Rendering
Rendering converts the code you write into user interfaces. React and Next.js allow you to create hybrid web applications where parts of your code can be rendered on the server or the client. This section will help you understand the differences between these rendering environments, strategies, and runtimes.
## Fundamentals
To start, it's helpful to be familiar with three foundational web concepts:
  * The Environments your application code can be executed in: the server and the client.
  * The Request-Response Lifecycle that's initiated when a user visits or interacts with your application.
  * The Network Boundary that separates server and client code.


### Rendering Environments
There are two environments where web applications can be rendered: the client and the server.
![Client and Server Environments](https://nextjs.org/_next/image?url=%2Fdocs%2Flight%2Fclient-and-server-environments.png&w=3840&q=75)![Client and Server Environments](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fclient-and-server-environments.png&w=3840&q=75)
  * The **client** refers to the browser on a user's device that sends a request to a server for your application code. It then turns the response from the server into a user interface.
  * The **server** refers to the computer in a data center that stores your application code, receives requests from a client, and sends back an appropriate response.


Historically, developers had to use different languages (e.g. JavaScript, PHP) and frameworks when writing code for the server and the client. With React, developers can use the **same language** (JavaScript), and the **same framework** (e.g. Next.js or your framework of choice). This flexibility allows you to seamlessly write code for both environments without context switching.
However, each environment has its own set of capabilities and constraints. Therefore, the code you write for the server and the client is not always the same. There are certain operations (e.g. data fetching or managing user state) that are better suited for one environment over the other.
Understanding these differences is key to effectively using React and Next.js. We'll cover the differences and use cases in more detail on the Server and Client Components pages, for now, let's continue building on our foundation.
### Request-Response Lifecycle
Broadly speaking, all websites follow the same **Request-Response Lifecycle** :
  1. **User Action:** The user interacts with a web application. This could be clicking a link, submitting a form, or typing a URL directly into the browser's address bar.
  2. **HTTP Request:** The client sends an HTTP request to the server that contains necessary information about what resources are being requested, what method is being used (e.g. `GET`, `POST`), and additional data if necessary.
  3. **Server:** The server processes the request and responds with the appropriate resources. This process may take a couple of steps like routing, fetching data, etc.
  4. **HTTP Response:** After processing the request, the server sends an HTTP response back to the client. This response contains a status code (which tells the client whether the request was successful or not) and requested resources (e.g. HTML, CSS, JavaScript, static assets, etc).
  5. **Client:** The client parses the resources to render the user interface.
  6. **User Action:** Once the user interface is rendered, the user can interact with it, and the whole process starts again.


A major part of building a hybrid web application is deciding how to split the work in the lifecycle, and where to place the Network Boundary.
### Network Boundary
In web development, the **Network Boundary** is a conceptual line that separates the different environments. For example, the client and the server, or the server and the data store.
In React, you choose where to place the client-server network boundary wherever it makes the most sense.
Behind the scenes, the work is split into two parts: the **client module graph** and the **server module graph**. The server module graph contains all the components that are rendered on the server, and the client module graph contains all components that are rendered on the client.
It may be helpful to think about module graphs as a visual representation of how files in your application depend on each other.
You can use the React `"use client"` convention to define the boundary. There's also a `"use server"` convention, which tells React to do some computational work on the server.
## Building Hybrid Applications
When working in these environments, it's helpful to think of the flow of the code in your application as **unidirectional**. In other words, during a response, your application code flows in one direction: from the server to the client.
If you need to access the server from the client, you send a **new** request to the server rather than re-use the same request. This makes it easier to understand where to render your components and where to place the Network Boundary.
In practice, this model encourages developers to think about what they want to execute on the server first, before sending the result to the client and making the application interactive.
This concept will become clearer when we look at how you can interleave client and server components in the same component tree.
### Server Components
Learn how you can use React Server Components to render parts of your application on the server.
### Client Components
Learn how to use Client Components to render parts of your application on the client.
### Composition Patterns
Recommended patterns for using Server and Client Components.
### Partial Prerendering
Learn how to combine the benefits of static and dynamic rendering with Partial Prerendering.
### Runtimes
Learn about the switchable runtimes (Edge and Node.js) in Next.js.
Was this helpful?
supported.
Send
