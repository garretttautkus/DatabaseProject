import React from "react";
import Navbar from '../components/Navbar';

const Login = () => {
      return (
        <div>
          <meta charSet="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using create-react-app" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          {/*
        manifest.json provides metadata used when your web app is installed on a
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
      */}
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          {/*
        Notice the use of %PUBLIC_URL% in the tags above.
        It will be replaced with the URL of the `public` folder during the build.
        Only files inside the `public` folder can be referenced from the HTML.
  
        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`.
      */}
          <title>Meeting Makers</title>
          <nav> 
            <a href="index.html"> Home Page</a>
            <a href="userHome.html">User Home Page </a>
            <a href="eventinput.html"> Create an event</a>
          </nav>
          <Navbar />
          <link rel="stylesheet" href="css/style.css" />
          <div className="container">
            <form action="action_page.php">
              {/* Organization inputs*/}
              <label htmlFor="uname">Username</label>
              <input type="text" id="uname" name="uname" placeholder="Email" />
              <label htmlFor="password">Password</label>
              <input type="text" id="password" name="password" placeholder="Password" />
              <input type="submit" defaultValue="Submit" />
            </form>
          </div>  
        </div>
      );
    }

  export default Login;