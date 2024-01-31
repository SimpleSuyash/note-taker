const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static('public'));
/*
app.get("/", (req, res)=>{
    res.send("<h1>Hello World!!</h1>")
});
*/
app.listen(PORT, () =>
    console.log(`Note Taker app listening at http://localhost:${PORT}`)
);