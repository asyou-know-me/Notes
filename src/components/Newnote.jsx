import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Newnote = ({handleNewNote}) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div
      className="note-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div className="newnote">
        <form
          style={{ display: "flex", flexDirection: "column", color: "black" }}
        >
          <h4 style={{ marginBottom: "0.5vmin", width: "max-content" }}>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              placeholder="Title ?"
              style={{
                border: "1px solid black",
                background: "transparent",
                width: "88.8vmin",
                fontWeight: "500",
              }}
            />
          </h4>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            type="text"
            name="content"
            placeholder="Content"
            style={{
              border: "1px solid black",
              height: "50vmin",
              background: "transparent",
            }}
          />
          <Link to="/">
            <button
            onClick={() => (handleNewNote(title, content))}
              style={{
                background: "yellow",
                color: "black",
                width: window.innerWidth < 600 ? "15vmin" : "11vmin",
                borderRadius: "1vmin",
                fontSize: window.innerWidth < 600 ? "3vmin" : "2vmin",
                fontWeight: "bold",
                marginTop: "1vmin",
                cursor: "pointer",
              }}
            >
              Done
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Newnote;
