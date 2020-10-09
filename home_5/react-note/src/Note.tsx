import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './note.css';
interface INote {
    id: number
    content: string
    date: string
    important: boolean
}

const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false,
};
let newNote: INote;

let notesList: Array<INote> = [
    {
        id: 1,
        content: 'The transmission media in telecommunication have evolved through numerous stages of technology, from beacons and other visual'
            + 'signals (such as smoke signals, semaphore telegraphs, signal flags, and optical heliographs), to electrical cable and electromagnetic radiation, including light.',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only Javascript',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components.'
            + 'It is maintained by Facebook and a community of individual developers and companies.',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
]

function noteDate(date: string) {
    let noteDate = new Date(date);
    return (
        <div>
            {noteDate.toLocaleDateString("en-US", options)}
        </div>
    )
}

function importantText(date: boolean) {
    if (date) {
        return (
            <div className="important">
                Important!!
            </div>
        )
    }
}

const Container: React.FC = () => {
    let [notes, setNotes] = useState(() => notesList);
    // useState<INote[]>();


    const [count, setCount] = useState(notesList.length);
    const [content, setContent] = useState('')
    const [important, setImportant] = useState(false)

    function DeleteNote (id: number) {
 
        const deleteIndex = notesList.map(function(x) {return x.id; }).indexOf(id);
        delete notesList[deleteIndex];

        notesList = notesList.filter(Boolean);
        setNotes((notes: INote[]) => {
            notes = notesList
            return notes
        });
        setCount(() => notesList.length);

    }

    function AddNote() {

        newNote =
        {
            id: notesList.length,
            content: content,
            date: new Date().toJSON(),
            important: important
        };
        notesList.push(newNote);
        setNotes((notes: INote[]) => {
            notes = notesList
            return notes
        });
        setCount(() => notesList.length);
        setImportant(false);
        setContent("");
    }

    return (
        <div>
            <div className="container">
                <div className="notesHeader">
                    <span>Create a new note here</span>
                </div>
                <div className="form">

                    <textarea className="textField" name="content" placeholder="Write your text here..." value={content} onChange={e => setContent(e.target.value)}>
                    </textarea >

                    <p>
                        <label className="checkbox" htmlFor="important">Important</label>
                        <input className="checkbox" name="important" checked={important} type="checkbox"
                            onChange={() => { important ? setImportant(false) : setImportant(true) }} />
                    </p>
                    <p>
                        <button className={"add btn"} onClick={AddNote}>
                            Add a note
                        </button>
                    </p>
                </div>

            </div>

            <div className="container">
                <div className="notesHeader">
                    <span>You have {count} notes</span>
                </div>
                <ul>
                    {notes.map((note: INote) =>
                    <li key={note.id}>
                        <div className="Note">
                            <div className="info">
                                <button className={"delete btn"}  onClick={() => {DeleteNote(note.id)}}>
                                    Delete
                                 </button>
                                <div className="block">
                                    {importantText(note.important)}
                                    <div className="date">
                                        {noteDate(note.date)}
                                    </div>
                                </div>
                            </div>

                            <div className="textBox">
                                {note.content}
                            </div>

                        </div>
                        </li>
                    )}
                   
                </ul>
            </div>
        </div>
    );
}

export default Container;