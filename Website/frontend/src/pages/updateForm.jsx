import React from "react";
import Navbar from '../components/Navbar';
import { useState } from "react";
import axios from 'axios';
//import { Link } from 'react-router-dom';


const Update = () => {
  const [updateForm, setUpdateForm] = useState({
    cname : "",
    cstartdate : "",
    cenddate : "",
    ccity : "",
    cfee : "",
    cattendance : "",
    cbudget : "",
    hname : "",
    oid: "1"
  });

  const handleUpdate = async (cid) => {
    
    try {
        await axios.put("http://localhost:8080//updateMeeting/" + cid, updateForm); //this is the backend endpoint
        setUpdateForm({ 
          cname : "",
          cstartdate : "",
          cenddate : "",
          ccity : "",
          cfee : "",
          cattendance : "",
          cbudget : "",
          hname : "",
          oid: "1"
         }); // reset the form
    } catch(err) {
        console.error(err.message); //console log the error
    }
  };
  const handleChange = (e) => {
    if (e.target.name === 'budget' && e.target.value === '') {
      setUpdateForm(prev => ({...prev, [e.target.name]: 0}));
    } else {
    setUpdateForm(prev => ({...prev, [e.target.name]: e.target.value})); //set the state to the value of the input
  }
};

    return (
        <div>
            <meta charSet="utf-8" />
            <title>Meeting Makers</title>
            <Navbar />
            <link rel="stylesheet" href="css/style.css" />
            <div className="container">
            <form id = "cid" onSubmit={()=>handleUpdate(updateForm.cid)}>
                <label htmlFor="cname">New Conference Name</label>
                <input type="text" id="cname" name="cname" placeholder="Conference Name" onChange={handleChange} />
                <label htmlFor="cstart">New Conference Start Date</label>
                <input type="date" id="cstartdate" name="cstartdate" placeholder="Start Date" format="yyyy-mm-dd" onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="cend">New Conference End Date</label>
                <input type="date" id="cenddate" name="cenddate" placeholder="End Date" format="yyyy-mm-dd" onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="ccity">New Conference City</label>
                <input type="text" id="ccity" name="ccity" placeholder="Conference City" onChange={handleChange} />
                <label htmlFor="cfee">New Fee</label>
                <input type="text" id="cfee" name="cfee" placeholder="Conference Attendance Fee" onChange={handleChange} />
                <label htmlFor="cattendance">New Conference Attendance</label>
                <input type="text" id="cattendance" name="cattendance" placeholder="Estimated Conference Attendance" onChange={handleChange} />
                <label htmlFor="budget">New Proposed Budget</label>
                <input type="number" id="cbudget" name="cbudget" placeholder="Proposed Budget" step="0.01" onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
    );
}

export default Update; 