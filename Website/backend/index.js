import express from "express"
import mysql from "mysql"
import cors from "cors"
import Client from "pg"
const app = express()


const client = new Client.Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'Project1',
  password: 'patchwork1029!', // this is the password to get into your postgresql, not the server
  port: 5432,
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//dependencies
app.use(express.json())
app.use(cors())

//gets the homepage, useful for testing
app.get("/", (req, res) => {
    res.json({ message: "Hello World" })
})

//EXAMPLE OF GET REQUEST
app.get("/userHome", (req, res) => {
    const query = "SELECT * FROM meeting_information"
    client.query(query, (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("Error retrieving your conferences")
        } else {
            res.json(result)
        }
    })
})

app.get("/user/:oid", (req, res) => {
    const oid = req.params.oid;
    const query = "SELECT * FROM current_user_organization WHERE oid= $1"
    client.query(query, [oid], (err, result) => {
        if (err) {
            console.log(err)
            res.status(500).send("Error retrieving your conferences")
        } else {
            res.json(result.rows[0])
        }
    })
})

//EXAMPLE OF POST REQUEST
app.post("/api/form", (req, res) => {
    const query = "INSERT INTO conference (cname, cstartdate, cenddate, ccity, cfee, cattendance, cbudget, hname, oid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
      const VALUES = [
        req.body.cname,
        req.body.cstartdate,
        req.body.cenddate,
        req.body.ccity,
        req.body.cfee,
        req.body.cattendance,
        req.body.cbudget,
        req.body.hname,
        req.body.oid
    ]

    client.query(query, VALUES, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.post("/api/register", (req, res) => {
    const query = "INSERT INTO organization (oname, oaddress, ocity, ostate, ozip, oemail, ophone, oid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"
      const VALUES = [
        req.body.oname, 
        req.body.oaddress,
        req.body.ocity,
        req.body.ostate,
        req.body.ozip, 
        req.body.oemail, 
        req.body.ophone, 
        req.body.oid 
    ]

    client.query(query, VALUES, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

//EXAMPLE OF DELETE REQUEST
app.delete("/userHome/:id", (req, res) => {
    const itemID = req.params.id;
    const query = "DELETE FROM conference WHERE itemID = $1"

    client.query(query, [itemID], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

//EXAMPLE OF PUT REQUEST
app.put("/todos/update/:id", (req, res) => {
    const itemID = req.params.id;
    const query = "UPDATE items SET isCompleted = NOT isCompleted WHERE itemID = $1";

    client.query(query, [itemID], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

//listen on port 8080
app.listen(8080, () => {
  console.log("Server is running")
});
