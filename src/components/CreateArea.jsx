import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [isDone,setIsDone] = useState(false)
  

  function handleChange(event) {
    const { name, value } = event.target;


    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function Clicked(){
    setIsDone(true)
  }

  return (
    <div>
      <form className="create-note">
        {isDone && ( <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />)}
        <textarea
          name="content"
          onClick={Clicked}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={ isDone ? 3 : 1}
        />
        <Zoom in={isDone}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
