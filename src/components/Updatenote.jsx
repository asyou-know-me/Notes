import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Updatenote = ({ transNote, handleSave }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [prevTitle, setPrevTitle] = useState("");
  const [prevContent, setPrevContent] = useState("");

  useEffect(() => {
    setTitle(transNote.title);
    setContent(transNote.content);
    setPrevTitle(transNote.title);
    setPrevContent(transNote.content);
  }, [transNote]);

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
              defaultValue={title}
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
            defaultValue={content}
            style={{
              border: "1px solid black",
              height: "50vmin",
              background: "transparent",
            }}
          />
          <Link to="/">
            <button
              onClick={() =>
                handleSave(transNote.id, title, content, prevTitle, prevContent)
              }
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
              Save
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Updatenote;
