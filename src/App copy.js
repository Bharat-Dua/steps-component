import { useState } from "react";
import "./index.css";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlerNext() {
    if (step < messages.length) {
      setStep((s) => s + 1);
    } else {
      setStep(1);
    }
    // if (step === messages.length) {
    //   setStep(1);
    // }
  }
  function handlerPrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            {/* <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={handlerPrevious}
              // disabled={step === 1}
            >
              prev
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={handlerNext}
              // disabled={step === messages.length}
            >
              next
            </button> */}
            <Button
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlerPrevious}
            >
              <span>👈</span>previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlerNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
