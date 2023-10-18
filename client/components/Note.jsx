import React from "react";

function Note(props) {
  return (
    <>
      <div className={"note"}>
        <p className={"noteHeader"}>{props.title}</p>
        <br />
        <p>{props.content}</p>
      </div>
    </>
  );
}

export default Note;
