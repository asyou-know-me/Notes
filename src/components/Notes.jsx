// import Feed from "./Feed";
import { Link } from "react-router-dom";

const Notes = ({ note }) => {
  // console.log(note);
  //This is a notes that displays on home page

  return (
    <>
      <div className="note">
        <Link to={`/notes/${note.id}`} style={{ textDecoration: "none" }}>
          <h4 style={{ color: "black" }}>{note.title}</h4>
        </Link>
        <p>
          {note.content && note.content.length <= 50
            ? note.content
            : `${note.content.slice(0, 50)}...`}
        </p>
        <p style={{fontSize:"1.7vmin"}}>
          {note.date &&
            (note.date == 1 || note.date == 21 || note.date == 31
              ? note.date + "st"
              : note.date == 2 || note.date == 22
              ? note.date + "nd"
              : note.date == 3 || note.date == 23
              ? note.date + "rd"
              : note.date + "th")}{" "}
          {note.mnth && note.mnth == 1
            ? "January"
            : note.mnth == 2
            ? "February"
            : note.mnth == 3
            ? "March"
            : note.mnth == 4
            ? "April"
            : note.mnth == 5
            ? "May"
            : note.mnth == 6
            ? "June"
            : note.mnth == 7
            ? "July"
            : note.mnth == 8
            ? "August"
            : note.mnth == 9
            ? "September"
            : note.mnth == 10
            ? "October"
            : note.mnth == 11
            ? "November"
            : "December"}
          ,{note.yr}
        </p>
      </div>
    </>
  );
};

export default Notes;
