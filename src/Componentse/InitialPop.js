import { useEffect, useState } from "react";
import { useNormalContext } from "../Context/Contex";
function InitialPop() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-container">
          <div className="background-blur"></div>
          <div className="popup-card">
            <h1 font-sans>Welcome to Compare</h1>
            <p font-sans>
              Here you can compare all the modern llm's that have come out in
              recent years. <br></br> now be careful with the prompts except gpt
              models some do require prompts with a specific structure.{" "}
              <br></br> so make sure you visit the website by clicking the visit
              website button on under eacj model to know more about the prompt
              each model might be expecting.
            </p>
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default InitialPop;
