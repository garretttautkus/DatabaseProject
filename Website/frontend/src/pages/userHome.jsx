import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Home = () => {
  const [conferences, setConferences] = useState([]);
  const [organizations, setOrganization] = useState([]);


  useEffect(() => {
    axios.get('/userHome')
    .then(res => {
      setConferences(res.data);
    })
    .catch(err => {
    console.log(err);
    });
  }  , []);

  useEffect(() => {
    axios.get('/user/:oid')
    .then(res => {
      setOrganization(res.data);
    })
    .catch(err => {
    console.log(err);
    });
  }  , []);

  return (
    <html lang="en">
      <div>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Meeting Makers</title>
        <link rel="stylesheet" href="css/style.css" />
      </div>
      <Navbar />
      <body>
        <section> 
          <h1> Placeholder</h1>
        <div>
        {organizations.map(organization => (
          <div id={organization.oid} className="container">
            <h2>{organization.OName}</h2>
          </div>
         ))}
        </div>
        </section>
        <section className="header">
          <h1>My Events</h1>
          <p>Connect. Meet. Collaborate.</p>
        </section>

        {/* <section className="container">
          <h2>Uprising of the Avians</h2>
          <p2>Hotel California, Los Angeles CA 2023-02-13 to 2023-02-15</p2>
        </section>

        <section className="container">
          <h2>Global Innovation Summit</h2>
          <p2>The Blue Chateau, Tampa Bay FL 2023-06-02 to 2023-06-05</p2>
        </section> */}
      <div>
        {conferences.map(conference => (
          <div id={conference.cid} className="container">
            <h2>{conference.CName}</h2>
            <p2>{conference.HName}, {conference.HAddress},{conference.HState}, {conference.HCity}, {conference.HZip}</p2>
            <p3>{conference.CStartDate} to {conference.CEndDate}</p3>
          </div>
        ))}
        </div>

      </body>
    </html>
  );
}
export default Home; 
