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
      {props.completed ? "Completed" : "Not completed"}
    </div>
  );
}

export default ListElement;
