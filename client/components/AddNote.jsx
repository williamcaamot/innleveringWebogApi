import {useState} from "react";

export function AddNote(props) {

    const [displayMode, setDisplayMode] = useState("none")

    const [title, setTtitle] = useState("");
    const [note, setNote] = useState("");

    function handleAddNoteViewBox(){
        setDisplayMode("block");
        console.log("pressed add note button")
    }

    async function handleAddNote(){
        const res = await fetch("/api/v1/note", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                content: note
            })
        });
        props.refreshNotes();
        setDisplayMode("none");
        setTtitle("");
        setNote("");

    }
    return <>
        <div
            id={"addNote"}
            onClick={handleAddNoteViewBox}
        >
            +
        </div>



        <div
            style={{display: displayMode}}
            id={"addNoteForm"}
        >
            <h2>Create new note</h2>
            <p>Title: <input
            value={title}
            onInput={e => setTtitle(e.target.value)}

            /></p>
            <br/>
            <p>Note content: <textarea
            value={note}
            onInput={e => setNote(e.target.value)}
            /></p>

            <button
            onClick={handleAddNote}
            >Legg til notat</button>

            <button
                onClick={event => setDisplayMode("none")}
            >Avbryt</button>


        </div>







    </>;
}