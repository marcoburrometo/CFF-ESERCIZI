import { useState } from "react";
import "./AddForm.css";

function AddForm(props) {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [color, setColor] = useState("#0f0");

  function resetForm() {
    setTitle("");
    setNotes("");
    setColor("#0f0");
    setExpanded(false);
  }

  function onSubmit(event) {
    event.preventDefault();
    props.onAdd({
      title: title,
      notes: notes,
      color: color,
      createDate: new Date(),
      completed: false,
    });
    resetForm();
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h5
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        Insert new TODO
      </h5>
      {expanded ? (
        <div className="content">
          <input
            required
            onChange={(ev) => {
              setTitle(ev.target.value);
            }}
            value={title}
            type="text"
            placeholder="Title"
          />
          <textarea
            onChange={(ev) => {
              setNotes(ev.target.value);
            }}
            value={notes}
            placeholder="Notes"
          ></textarea>
          <input
            onChange={(ev) => {
              setColor(ev.target.value);
            }}
            value={color}
            type="color"
            placeholder="Color"
          />
          <button disabled={title === ""} type="submit">
            Add
          </button>
        </div>
      ) : (
        <p>Clicca sopra per inserire</p>
      )}
    </form>
  );
}

export default AddForm;
