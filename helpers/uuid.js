const noteData = require("../db/db.json");
let aRandomNumber;
//produces a random number between 1 to 100 
//ultimately returns a number that is not being used as an id in current note items
const randomNumber = ()=>{
    // Returns a random integer from 1 to 100:
    aRandomNumber = Math.floor(Math.random()*100)+1;
    for (note of noteData){
        if(note.id===aRandomNumber){
            //when the notes has that id used
            //create a random number again
            randomNumber();
        }
    }
    return aRandomNumber;
};

const randomId = randomNumber();

// exporting a random number between 1 and 100 for notes id
module.exports = randomId;