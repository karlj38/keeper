import React, { useState } from "react";
import { Header } from "./components/Header/Header";
import { Create } from "./components/Create/Create";
import { Footer } from "./components/Footer/Footer";
import { Notes } from "./components/Notes/Notes";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(idToDelete) {
    setNotes(
      notes.filter((note, index) => {
        return index !== idToDelete;
      })
    );
  }

  return (
    <div className="App">
      <Header />
      <Create addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
