import Notes from "./Notes";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = ({ notes }) => {
  return (
    <div>
      <main className="Home">
        {useEffect(() => {
          <div style={{ textAlign: "center", marginTop: "2vmin" }}>
            {notes.length == 0 && <h1>No notes yet</h1>}
            <Link to={"/newnote"}>
              Create one <i className="bi bi-chevron-right"></i>
            </Link>
          </div>;
        }, [notes])}
        {[notes].flat().map((note) => (
          <Notes key={note.id} note={note} />
        ))}
        <Link to={"/newnote"}>
          <button
            style={{
              backgroundColor: "#ffd60a",
              height: window.innerWidth < 600 ? "14vmin" : "7vmin",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: window.innerWidth < 600 ? "14vmin" : "7vmin",
              borderRadius: "10vmin",
              position: "absolute",
              right: window.innerWidth < 600 ? "10vmin" : "20vmin",
              bottom: window.innerWidth < 600 ? "10vmin" : "20vmin",
              border: "1px solid black",
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            <i
              className="bi bi-plus-lg "
              style={{
                position: "absolute",
                fontSize: window.innerWidth < 600 ? "9vmin" : "5vmin",
                color: "black",
              }}
            ></i>
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
