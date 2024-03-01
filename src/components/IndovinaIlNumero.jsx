import { useState } from "react";
import fail from "../images/fail.jpeg";

/**
 * Crea un giochino che permetta all’utente di indovinare
 * un numero generato all’avvio (compreso tra 1 e 100).
 * L'utente deve indovinarlo inserendo valori tramite un campo di input.
 * La schermata sarà composta da questo input,
 * e da un feedback che indicherà se il numero inserito sarà troppo alto,
 * troppo basso o corretto, e quanti tentativi sono stati effettuati.
 * Dividere nei componenti GuessInput e Feedback.
 * Aggiungere bottone “Ricomincia\Nuova Partita”
 * che generi un nuovo numero da indovinare.
 *
 */
function IndovinaIlNumero() {
  const [numero, setNumero] = useState(Math.round(Math.random() * 100));
  const [tentativi, setTentativi] = useState(0);
  const [numeroInput, setNumeroInput] = useState();
  const [indovinato, setIndovinato] = useState(false);
  const [altoOBasso, setAltoOBasso] = useState("");

  function onClick() {
    if (numeroInput == numero) {
      setIndovinato(true);
    } else {
      setTentativi(tentativi + 1);
      setIndovinato(false);
      if (numeroInput > numero) {
        setAltoOBasso("alto");
      } else {
        setAltoOBasso("basso");
      }
    }
  }

  function ricomincia() {
    setTentativi(0);
    setNumeroInput("");
    setNumero(Math.round(Math.random() * 100));
  }

  function renderFeedback() {
    if (!numeroInput) {
      return null;
    }
    if (indovinato) {
      return (
        <p>
          hai indovinato dopo {tentativi} tentativi!
          <button onClick={ricomincia}>Ricomincia</button>
        </p>
      );
    }
    if (altoOBasso === "alto") {
      return (
        <p>
          <img height={100} src={fail} alt="fail" />
          <div>troppo alto</div>
        </p>
      );
    }
    if (altoOBasso === "basso") {
      return (
        <p>
          <img height={100} src={fail} alt="fail" />
          <div>troppo basso</div>
        </p>
      );
    }
  }

  return (
    <div>
      <h3>indovina il numero da 0 a 100</h3>
      <input
        type="number"
        max="100"
        min="0"
        onChange={(ev) => {
          setNumeroInput(ev.target.value);
        }}
      />
      <button onClick={onClick}>indovina</button>
      {renderFeedback()}
      {/* <Feedback tentativi={tentativi} indovinato={indovinato} altoOBasso={altoOBasso} /> */}
    </div>
  );
}

export default IndovinaIlNumero;
