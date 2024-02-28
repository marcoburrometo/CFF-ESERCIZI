import { useState } from "react";

function checkPalindrome(str) {
  if (
    str.replaceAll(" ", "") ===
    str.replaceAll(" ", "").split("").reverse().join("")
  ) {
    return true;
  } else {
    return false;
  }
}

function Palindrome() {
  const [value, setValue] = useState("");
  const [risultato, setRisultato] = useState(false);

  function renderIsPalindrome() {
    if (value === "") {
      return null;
    }
    if (checkPalindrome(value)) {
      return (
        <p
          style={{
            color: "green",
          }}
        >
          la parola è palindroma
        </p>
      );
    }
    return (
      <p
        style={{
          color: "red",
        }}
      >
        la parola non è palindroma
      </p>
    );
  }

  function onClick() {
    if (checkPalindrome(value)) {
      alert("La parola è palindroma");
      setRisultato(true);
    } else {
      alert("La parola non è palindroma");
      setRisultato(false);
    }
  }

  return (
    <div>
      <h1>Palindrome</h1>
      <input
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
        type="text"
      />
      <p>
        la parola <i>{value}</i>
        {/* {checkPalindrome(value) ? " è palindroma" : " NON è palindroma"} */}
        {renderIsPalindrome()}
        {/* {risultato ? " è palindroma" : " NON è palindroma"} */}
      </p>

      <button onClick={onClick}>Check</button>
    </div>
  );
}

export default Palindrome;
