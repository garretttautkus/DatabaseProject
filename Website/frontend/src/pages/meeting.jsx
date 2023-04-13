import Navbar from '../components/Navbar';
//import { Link } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



//import '../style.css';

const Meeting = () => {
    const { cid } = useParams();
    const [meeting, setMeeting] = useState([]);
    const [attendees, setAttendees] = useState([]);

    useEffect(() => {
        const getMeeting = async () => {
          try {
            const res = await axios.get(`http://localhost:8080/getConference/${cid}`)
            setMeeting(res.data);
          }
          catch(err) {
            console.error(err.message);
          }
        }
        getMeeting();
      });

    useEffect(() => {
        const getAttendees = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/getAttendee/${cid}`)
                setAttendees(res.data);
            }
            catch(err) {
                console.error(err.message);
            }
        }
        getAttendees();
    })


      return (
        <div>
             <meta charSet="utf-8" />
             <link rel="stylesheet" href="css/style.css" />
  
          <Navbar />
          <section>
            <h id={meeting.cid} className="container">{meeting.cname}</h>
            <p>{meeting.hname}, {meeting.haddress},{meeting.hstate}, {meeting.hcity}, {meeting.hzip}</p>
            <p>{meeting.cstartdate} to {meeting.cenddate}</p>
            </section>
            <section> 
                <h>Attendees</h>
                {attendees.map((attendee) => (
                    <div>{attendee.aname}, {attendee.aemail}, {attendee.aphone}</div>
                ))}
            </section>
            <br />
            <br />
            {/* <Link to={`/updateForm/${conference.cid}`}>
              <input type="submit" value="Update Meeting" />
            </Link>
            <button type="submit" onClick={()=>handleDelete(conference.cid)}>Delete Meeting</button> */}
        </div>
      );
    }

  export default Meeting;