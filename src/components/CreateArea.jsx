import React from "react";

function CreateArea(props) {
  const [noteObj, SetNoteObj] = React.useState({
    noteTitle: "",
    noteContent: "",
  });

  function updateValues(event) {
    const { name, value } = event.target;
    SetNoteObj(function (previous) {
      if (name === "title") {
        return {
          noteTitle: value,
          noteContent: previous.noteContent,
        };
      } else if (name === "content") {
        return {
          noteTitle: previous.noteTitle,
          noteContent: value,
        };
      }
    });
  }

  function preventUpdating(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form onClick={preventUpdating}>
        <input
          onChange={updateValues}
          name="title"
          placeholder="Title"
          value={noteObj.noteTitle}
        />
        <textarea
          onChange={updateValues}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteObj.noteContent}
        />
        <button
          onClick={() => {
            props.addNote(noteObj);
            noteObj.noteTitle = "";
            noteObj.noteContent = "";
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
