import React from "react";
import Navbar from '../components/Navbar';
import { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


const Form = () => {
  const [newForm, setNewForm] = useState({
    cname : "",
    cstartdate : "",
    cenddate : "",
    ccity : "",
    cfee : "",
    cattendance : "",
    cbudget : "50000.00",
    hname : "Hotel California",
    oid: "1"
  });
  const handleSubmit = async (e) => {
    
    try {
        await axios.post("http://localhost:8080/api/form", newForm); //this is the backend endpoint
        setNewForm({ 
          cname : "",
          cstartdate : "",
          cenddate : "",
          ccity : "",
          cfee : "",
          cattendance : "",
          cbudget : "50000.00",
          hname : "Hotel California",
          oid: "1"
         }); // reset the form
    } catch(err) {
        console.error(err.message); //console log the error
    }
  };

  const handleChange = (e) => {
    setNewForm(prev => ({...prev, [e.target.name]: e.target.value})); //set the state to the value of the input
  }

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
            <form onSubmit={handleSubmit}>
                      {/* Organization inputs*/}
                {/* <label htmlFor="oname">Company Name</label>
                <input type="text" id="oname" name="oname" placeholder="Company name" onChange={handleChange} />
                <label htmlFor="oaddress">Company Address</label>
                <input type="text" id="oaddress" name="oaddress" placeholder="Company street address" onChange={handleChange} />
                <label htmlFor="ocity">City</label>
                <input type="text" id="ocity" name="ocity" placeholder="City" onChange={handleChange} />
                <label htmlFor="ostate">State</label>
                <input type="text" id="ostate" name="ostate" placeholder="State" onChange={handleChange} />
                <label htmlFor="ozip">Zipcode</label>
                <input type="text" id="ozip" name="ozip" placeholder="Zipcode" onChange={handleChange} />
                <label htmlFor="oemail">Email</label>
                <input type="text" id="oemail" name="oemail" placeholder="Contact Email" onChange={handleChange} />
                <label htmlFor="ophone">Phone</label>
                <input type="text" id="ophone" name="ophone" placeholder="Contact Phone number" onChange={handleChange} /> */}
                      {/* Conference inputs*/}
                <label htmlFor="cname">Conference Name</label>
                <input type="text" id="cname" name="cname" placeholder="Conference name" onChange={handleChange} />
                <label htmlFor="cstart">Conference Start Date</label>
                <input type="date" id="cstartdate" name="cstartdate" placeholder="Start Date" format="yyyy-MM-dd" onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="cend">Conference End Date</label>
                <input type="date" id="cenddate" name="cenddate" placeholder="End Date" format="yyyy-MM-dd" onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="ccity">Conference City</label>
                <input type="text" id="ccity" name="ccity" placeholder="Conference City" onChange={handleChange} />
                <label htmlFor="cfee">Fee</label>
                <input type="text" id="cfee" name="cfee" placeholder="Conference Attendance Fee" onChange={handleChange} />
                <label htmlFor="cattendance">Conference Attendance</label>
                <input type="text" id="cattendance" name="cattendance" placeholder="Estimated Conference Attendance" onChange={handleChange} />
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
                {/* <label htmlFor="subject">Extra Info</label>
                <textarea id="subject" name="subject" placeholder="Anything else we need to know.." style={{height: '200px'}} defaultValue={""} /> */}
                <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
    );
}

export default Form; 


