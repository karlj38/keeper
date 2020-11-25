import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export function Create(props) {
  const [newNote, setNewNote] = useState({});
  const [isFocus, setIsFocus] = useState(false);

  function expand() {
    setIsFocus(true);
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newNote.content) {
      props.addNote(newNote);
      setNewNote({ title: "", content: "" });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={"create-note"}>
        {isFocus && (
          <input
            id="title"
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={newNote.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isFocus ? "3" : "1"}
          onChange={handleChange}
          onFocus={expand}
          value={newNote.content}
        />
        {isFocus && (
          <Zoom in={true}>
            <Fab type="submit">
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}
