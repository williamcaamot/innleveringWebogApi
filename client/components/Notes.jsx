import { useEffect, useState } from "react";
import Note from "./Note.jsx";
import { AddNote } from "./AddNote.jsx";

export function Notes() {
  const [toDoItems, setToDoItems] = useState([]);

  async function getItems() {
    const res = await fetch("/api/v1/note");
    const data = await res.json();
    await setToDoItems(data);
    await console.log(data);
  }




  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div id={"todoitems"}>
        {toDoItems &&
          toDoItems.map((note) => (
            <Note key={note.id} title={note.title} content={note.content} />
          ))}
      </div>

      <AddNote refreshNotes={getItems} />
    </>
  );
}
