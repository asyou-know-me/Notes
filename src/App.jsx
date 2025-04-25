import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Note from "./components/Note";
import Newnote from "./components/Newnote";
import Updatenote from "./components/Updatenote";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import apiRequest from "./components/apiRequest";

// My API_URL = http://localhost:3500/notes

function App() {
  const API_URL = "https://db-4-6kxm.onrender.com/notes"; //API URL for notes, of server
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [transNote, setTransNote] = useState({
    id: null,
    title: null,
    content: null,
    date: Number,
    mnth: Number,
    yr: Number,
  });

  // Used to perform Delete operation on a note
  const apiRequest = async (url = "", optionsObj = null, errMsg = null) => {
    try {
      const response = await fetch(url, optionsObj);
      if (!response.ok) throw Error("Please reload the app");
    } catch (err) {
      errMsg = err.message;
    } finally {
      return errMsg;
    }
  };

  // Handle Delete of a note
  const handleDelete = async (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    const deleteOptions = {
      method: "DELETE",
    };
    const reqUrl = `${API_URL}/${id}`; //mistake{error}
    const result = await apiRequest(reqUrl, deleteOptions);
    // console.log(result);
  };

  // Handle New Notes, Which user creates
  const handleNewNote = async (title, content) => {
    const id = notes.length
      ? (Number(notes[notes.length - 1].id) + 1).toString()
      : "1";
      const date = new Date().getUTCDate();
      const mnth = new Date().getMonth() + 1;
      const yr = new Date().getFullYear();
    const newNote = { id, title, content, date, mnth, yr };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

    const noteOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    };
    const result = await fetch(`${API_URL}`, noteOptions);
  };

  // Handle Edit Function handle's the edit functionality and receives the id, title and content of the edited note
  const handleEdit = async (id, title, content) => {
    setTransNote({ id, title, content });
  };
  const handleSave = async (id, title, content, prevTitle, prevContent) => {
    // Checking whether the previous title and content are the same as the current title and content
    let updatedFields = {};
    updatedFields.id = id;
    title !== prevTitle // If the title is different, update the title
      ? (updatedFields.title = title)
      : (updatedFields.title = prevTitle);

    content !== prevContent // If the content is different, update the content
      ? (updatedFields.content = content)
      : (updatedFields.content = prevContent);

    if (Object.keys(updatedFields).length == 0) return;
    const updateOpts = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOpts);
    navigate("/");
    window.location.reload();
  };

  // Fetching the notes when the component loads
  const fetchNotes = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    setNotes(data);
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home notes={notes} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/notes/:id"
            element={
              <Note
                notes={notes}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            }
          />
          <Route
            path="/newnote"
            element={<Newnote handleNewNote={handleNewNote} />}
          />
          <Route
            path="/update"
            element={
              <Updatenote transNote={transNote} handleSave={handleSave} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
//Updatenote
