import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Note = ({ notes, handleDelete, handleEdit }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id.toString() == id);
  const navigate = useNavigate();
  return (
    <main className="note">
      <article>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <button
          onClick={() => {
            handleDelete(note.id);
            navigate("/");
          }}
          style={{ backgroundColor: "red", color: "black" }}
        >
          Delete
        </button>
        <Link to="/update">
          <button
            onClick={() => handleEdit(note.id, note.title, note.content)}
            style={{ backgroundColor: "lightgreen", marginLeft: "1vmin" }}
          >
            Update
          </button>
        </Link>
      </article>
    </main>
  );
};

export default Note;
