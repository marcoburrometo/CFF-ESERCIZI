import { useEffect, useState } from "react";

function EsempioUseEffect() {
  const [contatore, setContatore] = useState(0);
  const [contatore2, setContatore2] = useState(0);

  useEffect(() => {
    console.log("inizializzazione");
  }, []);

  useEffect(() => {
    if (contatore2 === 10) {
      alert("bravo hai raggiunto 10");
    }
    console.log("EsempioUseEffect: useEffect - hai cambiato il contatore 2");
  }, [contatore2]);

  return (
    <div>
      EsempioUseEffect:
      <div>
        {contatore} - {contatore2}
        <button onClick={() => setContatore(contatore + 1)}>Incrementa</button>
        <button onClick={() => setContatore2(contatore2 + 1)}>
          Incrementa 2
        </button>
      </div>
    </div>
  );
}

export default EsempioUseEffect;
