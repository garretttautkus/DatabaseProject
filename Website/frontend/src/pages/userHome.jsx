import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [conferences, setConferences] = useState([]);
  const [organizations, setOrganization] = useState([]); // creates the JSON objects. where we store the response


  useEffect(() => {
    const getConferences = async () => {
      try {
        const res = await axios.get("http://localhost:8080/allMeetings")
        setConferences(res.data);
      }
      catch(err) {
        console.error(err.message);
      }
    }
    getConferences();
  }  , []);

  useEffect(() => {
     // like a wrapper. use an asycn
     const getOrganization = async () => {
      try {
        const res = await axios.get("http://localhost:8080/user/1")
        setOrganization(res.data); // takes the response and places it in organization variable
      }
      catch(err) {
        console.error(err.message);
      }
    }
    getOrganization(); 
  }, []);
    
  const handleDelete = async (cid) => {
    try {
      await axios.delete("http://localhost:8080/delete/" + cid); //axios call to the backend
      window.location.reload(); //reloads the page
    }
    catch (err) {
      console.error(err.message); //log error
    }
  };

  return ( // return is like the body tag
    <div>
      <div>
        <meta charSet="utf-8" />
        <title>Meeting Makers</title>
        <link rel="stylesheet" href="css/style.css" />
      </div>
      <Navbar />
        <section> 
        <div>
          <div id={organizations.oid} className="container">
          <h2>{organizations.oname}</h2>
          </div>
        </div>
        </section>
        <section className="header">
          <h1>My Events</h1>
          <p>Connect. Meet. Collaborate.</p>
        </section>
      <div>
        {conferences.map((conference) => (
          <div id={conference.cid} className="container">
            <h2>{conference.cname}</h2>
            <p2>{conference.hname}, {conference.haddress},{conference.hstate}, {conference.hcity}, {conference.hzip}</p2>
            <p3>{conference.cstartdate} to {conference.cenddate}</p3>
            <Link to={`/updateForm/${conference.cid}`}>
              <input type="submit" value="Update Meeting" />
            </Link>
            <button type="submit" onClick={()=>handleDelete(conference.cid)}>Delete Meeting</button>
          </div>
        ))}
        </div>
      </div>
  );
}
export default Home; 