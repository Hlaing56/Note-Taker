const fs = require('fs');
const util = require('util');

const readFileAsyne = util.promisify(fs.readFile);
const writeFileAsyne = util.promisify(fs.writeFile);

class Store {

    read() {
        return readFileAsyne("db/db.json", 'utf-8')
    }

    write(note) {
        return writeFileAsyne("db/db.json", JSON.stringify(note))
    }

    getNotes() {
        return this.read().then((notes) => {
            let notesArray;
            try{notesArray = [].concat(JSON.parse(notes));}
            catch(err){notesArray=[];}
            return notesArray;
        });
    }

    addNote(note) {
        const {title, text} = note;
        if (!title || !text) {
            throw new Error ('invaild note');
        }
        const newNote = {title, text};
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(()=> newNote);
    }

}

module.exports = new Store();