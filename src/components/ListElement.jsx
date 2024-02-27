import "./ListElement.css";

function ListElement(props) {
  return (
    <div
      className="list-element"
      style={{
        backgroundColor: props.color,
      }}
    >
      <div>{props.title}</div>
      <div>{props.notes}</div>
      <div>{props.createDate.toLocaleString()}</div>
      <div>
        <button onClick={props.onDelete}>X</button>
        {!props.completed ? (
          <button onClick={props.onComplete}>✔</button>
        ) : null}
        {props.completed ? "Completed" : "Not completed"}
      </div>
    </div>
  );
}

export default ListElement;
