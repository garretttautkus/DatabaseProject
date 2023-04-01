import React from 'react';

function MyComponent() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Meeting Makers</title>
        <nav> 
          <a href="index.html"> Home Page</a>
          <a href="loginpage.html">Login </a>
          <a href="eventinput.html"> Create an event</a>
        </nav>
        <link rel="stylesheet" href="css/style.css" />
      </head>

      <body>
        <section className="header">
          <h1>My Events</h1>
          <p>Connect. Meet. Collaborate.</p>
        </section>

        <section className="container">
          <h2>Uprising of the Avians</h2>
          <p>Hotel California, Los Angeles CA 2023-02-13 to 2023-02-15</p>
        </section>

        <section className="container">
          <h2>Global Innovation Summit</h2>
          <p>The Blue Chateau, Tampa Bay FL 2023-06-02 to 2023-06-05</p>
        </section>
      </body>
    </html>
  );
}
