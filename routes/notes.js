// Import Express.js
const express = require("express");
const noteData = require("../db/db.json");

const router = express.Router();

router.get("/",(req,res)=> res.json(noteData));
// router.post("/",(req,res)=>{
//     res.send(res.json(noteData));
// });
// router.put("/",(req,res)=>{
//     res.send(res.json(noteData));
// });
// router.delete("/",(req,res)=>{
//     res.send(res.json(noteData));
// });



module.exports = router;