// Import Express.js
const express = require("express");
// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require("node:path");
const notes = require("./routes/api/notes");
// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;
// Initialize an instance of Express.js
const app = express();

// Static middleware pointing to the public folder
app.use(express.static("public"));
// app.use(express.json());
app.use("/api/notes", notes);

// Create Express.js routes for default '/', '/notes'  endpoints
// viewed at http://localhost:3001
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});
// listen() method is responsible for listening for incoming connections on the specified port 
// app.set
app.listen(PORT, () =>
    console.log(`Note Taker app listening at http://localhost:${PORT}`)
);