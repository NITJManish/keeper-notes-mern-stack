import React,{useState} from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import './style.css';

function App() {
    const [notes,setNotes]=useState([]);

function addNote(newNotes)
{
   setNotes(prevNotes=>{
    return [...prevNotes,newNotes];
   });
}
function deleteNote(id)
{
   setNotes(prevNotes=>{
    return prevNotes.filter((notesItem,index)=>{
        return index !== id;
    });
   });
}

  return (
    <div>
      <Navbar />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
