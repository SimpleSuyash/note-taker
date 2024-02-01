// Import Express.js, pody-parser
const express = require("express");
const bodyParser = require("body-parser");
const noteData = require("../../db/db.json");

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

router.get("/",(req,res)=> res.json(noteData));
router.post("/",(req,res)=>{
    const note = {
        title: req.body.title,
        text: req.body.text
    }
    noteData.push(note);
    res.json(noteData);
});
// router.put("/:id",(req,res)=>{
//     res.send(res.json(noteData));
// });
// router.delete("/:id",(req,res)=>{
//     res.send(res.json(noteData));
// });



module.exports = router;