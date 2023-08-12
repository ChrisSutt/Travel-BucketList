const { JournalEntry } = require('../models');

const journalentry = [
    {
        "entry_id": 1,
        "title": "It begins",
        "username": "Benhwaet",
        "entry_date": "2023-08-10",
        "entry_content": "I have decided to start a travel journal, in order to mark all the places I'd love to go and probably never will."
    },
    {
        "entry_id": 2,
        "title": "Entry the Second",
        "username": "Benhwaet",
        "entry_date": "2023-08-11",
        "entry_content": "I did go to a few places already, so my travel bucket list won't seem as empty if I include those."
    },
    {
        "entry_id": 3,
        "title": "Entry the Third: My first few trips",
        "username": "Benhwaet",
        "entry_date": "2023-08-12",
        "entry-content": "The first few trips are relatively boring, since I stayed in Canada and didn't do much other than go to the theatre in Toronto and go to la Ronde in Montreal."
    },
    {
        "entry_id": 4,
        "title": "Entry the Fourth: My first trip abroad",
        "username": "Benhwaet",
        "entry_date": "2023-08-13",
        "entry-content": "For High School Graduation, I went to the Mayan Riviera in Mexico. Though we stayed at a resort, we were able to go visit Chichen Itza.",
        "destination_id": 7
    },
];

const seedJournal = () => JournalEntry.bulkCreate(journalentry);

module.exports = seedJournal;