const fs = require('fs');
const util = require('util');

const readFileAsyne = util.promisify(fs.readFile);
const writeFileAsyne = util.promisify(fs.writeFile);

function read() {
    return readFileAsyne("./db.json", 'utf-8')
}

function write(note) {
    return writeFileAsyne("./db.json", JSON.stringify(note))
}

function getNote() {
    return this.read().then(notes => {
        let notesArray;
        try{notesArray = [].concat(JSON.parse(notes));}
        catch(err){notesArray=[];}
        return notesArray;
    })
}

function newNote() {
    
}


module.exports ={
    read,
    write,
    getNote,
    newNote
};