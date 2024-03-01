import fail from "../images/fail.jpeg";

function Feedback({
  tentativi,
  giocatore,
  indovinato,
  altoOBasso,
  ricomincia,
}) {
  if (indovinato) {
    return (
      <p>
        Bravo {giocatore}, hai indovinato dopo {tentativi} tentativi!
        <button onClick={ricomincia}>Ricomincia</button>
      </p>
    );
  }
  if (altoOBasso === "alto") {
    return (
      <p>
        <img height={100} src="./fail.jpeg" alt="fail" />
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

export default Feedback;
