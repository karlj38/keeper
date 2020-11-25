import React from "react";
import Note from "../Note/Note.js";

export function Notes(props) {
  return props.notes.map((note, index) => {
    return (
      <Note
        title={note.title}
        content={note.content}
        key={index}
        index={index}
        deleteNote={props.deleteNote}
      />
    );
  });
}
