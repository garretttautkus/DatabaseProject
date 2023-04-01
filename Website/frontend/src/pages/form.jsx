import React from "react";
import Navbar from '../components/Navbar';

const Form = () => {
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
            <Navbar />

            <link rel="stylesheet" href="css/style.css" />
            <div className="container">
            <form action="action_page.php">
                      {/* Organization inputs*/}
                <label htmlFor="oname">Company Name</label>
                <input type="text" id="oname" name="oname" placeholder="Company name" />
                <label htmlFor="oaddress">Company Address</label>
                <input type="text" id="oaddress" name="oaddress" placeholder="Company street address" />
                <label htmlFor="ocity">City</label>
                <input type="text" id="ocity" name="ocity" placeholder="City" />
                <label htmlFor="ostate">State</label>
                <input type="text" id="ostate" name="ostate" placeholder="State" />
                <label htmlFor="ozip">Zipcode</label>
                <input type="text" id="ozip" name="ozip" placeholder="Zipcode" />
                <label htmlFor="oemail">Email</label>
                <input type="text" id="oemail" name="oemail" placeholder="Contact Email" />
                <label htmlFor="ophone">Phone</label>
                <input type="text" id="ophone" name="ophone" placeholder="Contact Phone number" />
                      {/* Conference inputs*/}
                <label htmlFor="cname">Conference Name</label>
                <input type="text" id="cname" name="cname" placeholder="Conference name" />
                <label htmlFor="cstart">Conference Start Date</label>
                <input type="date" id="cstart" name="cstart" placeholder="Start Date" />
                <br />
                <br />
                <label htmlFor="cend">Conference End Date</label>
                <input type="date" id="cend" name="cend" placeholder="End Date" />
                <br />
                <br />
                <label htmlFor="ccity">Conference City</label>
                <input type="text" id="ccity" name="ccity" placeholder="Conference City" />
                <label htmlFor="cfee">Fee</label>
                <input type="text" id="cfee" name="cfee" placeholder="Conference Attendance Fee" />
                <label htmlFor="cattendance">Conference Attendance</label>
                <input type="text" id="cattendance" name="cattendance" placeholder="Estimated Conference Attendance" />
                <label htmlFor="budget">Budget</label>
                <select id="budget" name="budget">
                <option value="50,000">under $50,000</option>
                <option value="75,000">$50,000 - $75,000</option>
                <option value="100,000">$75,000 - $100,000</option>
                <option value="125,000">$100,000 - $125,000</option>
                <option value="150,000">$125,000 - $150,000</option>
                <option value="150,000+">Above $150,000</option>
                </select>
                      {/* Not sure how to do attendees - do we need to? */}
                      {/* Didn't include hotel - do we need to? */}
                <label htmlFor="subject">Extra Info</label>
                <textarea id="subject" name="subject" placeholder="Anything else we need to know.." style={{height: '200px'}} defaultValue={""} />
                <input type="submit" defaultValue="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Form; 


