import { useState } from "react";
import GuessInput from "./GuessInput";
import Feedback from "./Feedback";

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
 */
function IndovinaIlNumero() {
  const [numero, setNumero] = useState(Math.round(Math.random() * 100));
  // "uno" | "due"
  const [giocatore, setGiocatore] = useState("");
  const [tentativi, setTentativi] = useState(0);
  const [indovinato, setIndovinato] = useState(false);
  const [altoOBasso, setAltoOBasso] = useState("");

  function indovina(numeroInput, g) {
    if (numeroInput == numero) {
      setGiocatore(g);
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
    setNumero(Math.round(Math.random() * 100));
  }

  return (
    <div>
      <h3>indovina il numero da 0 a 100</h3>
      <GuessInput
        onGuess={(val) => {
          indovina(val, "uno");
        }}
      />
      <GuessInput
        onGuess={(val) => {
          indovina(val, "due");
        }}
      />
      <Feedback
        tentativi={tentativi}
        indovinato={indovinato}
        altoOBasso={altoOBasso}
        ricomincia={ricomincia}
        giocatore={giocatore}
      />
    </div>
  );
}

export default IndovinaIlNumero;
