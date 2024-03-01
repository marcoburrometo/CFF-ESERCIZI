import { useState } from "react";

function GuessInput(props) {
  const [numeroInput, setNumeroInput] = useState("");

  function guess() {
    props.onGuess(numeroInput);
  }

  return (
    <div>
      <input
        type="number"
        max="100"
        min="0"
        value={numeroInput}
        onChange={(ev) => {
          setNumeroInput(ev.target.value);
        }}
      />
      <button onClick={guess}>indovina</button>
    </div>
  );
}

export default GuessInput;
