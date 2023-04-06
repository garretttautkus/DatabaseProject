import React from "react";
import Navbar from '../components/Navbar';
import { useState } from "react";
import axios from 'axios';


const Hotel = () => {
  const [hotelForm, setNewForm] = useState({
    HMaxMeetSize : "",
    Hname : "",
    HState : "",
    HZip : "",
    HAddress : "",
    HContactPhone : "",
    HPhone : "",
    HCity : "",
  });
  const handleSubmit = async (e) => {
    try {
        await axios.post("http://localhost:8080/api/hotel", hotelForm); //this is the backend endpoint
        setNewForm({ 
            HMaxMeetSize : "",
            Hname : "",
            HState : "",
            HZip : "",
            HAddress : "",
            HContactPhone : "",
            HPhone : "",
            HCity : ""
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
                <label htmlFor="HName">Hotel Name</label>
                <input type="text" id="HName" name="HName" placeholder="Hotel name" onChange={handleChange} />
                <label htmlFor="HMaxMeetSize">Hotel Max Meeting Size</label>
                <input type="text" id="HMaxMeetSize" name="HMaxMeetSize" placeholder="Hotel Max Meeting Size" onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="HState">Hotel State</label>
                <input type="text" id="HState" name="HState" placeholder="Hotel State"  onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="HCity">Hotel City</label>
                <input type="text" id="HCity" name="HCity" placeholder="Hotel City" onChange={handleChange} />
                <label htmlFor="HAddress">Hotel Address</label>
                <input type="text" id="HAddress" name="HAddress" placeholder="Hotel Address" onChange={handleChange} />
                <label htmlFor="HZip">Hotel Zip Code</label>
                <input type="text" id="HZip" name="HZip" placeholder="Hotel Zip Code" onChange={handleChange} />
                <label htmlFor="HNumRooms">Hotel Number of Rooms</label>
                <input type="number" id="HNumRooms" name="HNumRooms" placeholder="Hotel Number of Rooms" onChange={handleChange} />
                <label htmlFor="HPhone">Hotel Phone Number</label>
                <input type="text" id="HPhone" name="HPhone" placeholder="Hotel Phone" onChange={handleChange} />
                <label htmlFor="HContactPhone">Hotel Representative Contact Phone</label>
                <input type="text" id="HContactPhone" name="HContactPhone" placeholder="Hotel Contact Phone" onChange={handleChange} />
                      {/* Not sure how to do attendees - do we need to? */}
                      {/* Didn't include hotel - do we need to? */}
                {/* <label htmlFor="subject">Extra Info</label>
                <textarea id="subject" name="subject" placeholder="Anything else we need to know.." style={{height: '200px'}} defaultValue={""} /> */}
                <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    );
}

export default Hotel;