import React from "react";


function Note(props){


    return<>
        <div className={"note"}>
            <p>{props.title}</p>
            <p>{props.content}</p>

        </div>
    </>
}

export default Note;