import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "127.0.0.1", //the host for you database
    user: "root", //the username for your database
    password: "root", //the password for your database
    database: "Meeting Makers" //the name of your database (database itself, not the schema)
})

//dependencies
app.use(express.json())
app.use(cors())

//gets the homepage, useful for testing
app.get("/", (req, res) => {
    res.json({ message: "Hello World" })
})

//EXAMPLE OF GET REQUEST
app.get("/todos", (req, res) => {
    const query = "SELECT * FROM conferences"
    db.query(query, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

//EXAMPLE OF POST REQUEST
app.post("/todos", (req, res) => {
    const query = "INSERT INTO conferences (cname, cstartdate, cenddate, ccity, cfee, cattendance, cbudget, hname) VALUES ('IPOAC Year in Review', '2023-02-14', '2023-02-15', 'Missoula', 25, 95, 2000, 'Hilton Hotel Missoula')"

    const VALUES = [
        req.body.itemName
    ]

    db.query(query, [VALUES], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

//EXAMPLE OF DELETE REQUEST
app.delete("/todos/delete/:id", (req, res) => {
    const itemID = req.params.id;
    const query = "DELETE FROM conference WHERE itemID = ?"

    db.query(query, [itemID], (err, result) => {
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
    const query = "UPDATE items SET isCompleted = NOT isCompleted WHERE itemID = ?";

    db.query(query, [itemID], (err, result) => {
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
