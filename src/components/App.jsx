import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notesArray, SetNotesArray] = React.useState([]);

  function addNote(newNote) {
    SetNotesArray((previous) => {
      return [
        ...previous,
        { noteTitle: newNote.noteTitle, noteContent: newNote.noteContent },
      ];
    });
  }

  function deleteNote(index) {
    SetNotesArray((previous) => {
      return previous.filter((note, noteIndex) => {
        return noteIndex !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notesArray.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.noteTitle}
            content={note.noteContent}
            deleteNode={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
