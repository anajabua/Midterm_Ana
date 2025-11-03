import React, { useState, useEffect } from "react";
import CardSection from "./components/CardSection";
import FromSection from "./components/FormSection"

export default function App() {
  const [cardName, setCardName] = useState(localStorage.getItem("cardName") || "JANE APPLESEED");
  const [cardNumber, setCardNumber] = useState(localStorage.getItem("cardNumber") || "0000 0000 0000 0000");
  const [expDate, setExpDate] = useState(localStorage.getItem("expDate") || "00/00");
  const [cvc, setCvc] = useState(localStorage.getItem("cvv") || "000");
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  useEffect(() => {
    localStorage.setItem("cardName", cardName);
    localStorage.setItem("cardNumber", cardNumber);
    localStorage.setItem("expDate", expDate);
    localStorage.setItem("cvc", cvc);
  }, [cardName, cardNumber, expDate, cvc]);

  const correctPassword = "1234"; 

  const CheckPassword = () => {
    if (password !== correctPassword) {
      setIsPasswordCorrect(false);
    } else {
      setIsPasswordCorrect(true);
      alert("სწორია პაროლი");
    }
  };

  return (
    <main className="page">
      <CardSection
      cardName={cardName}
      cardNumber={cardName}
      expDate={expDate}
      cvc={cvc}
      />

      <FromSection
      cardName={cardName}
      setCardName={setCardName}
      cardNumber={cardName}
      setCardNumber={setCardNumber}
      expDate={expDate}
      setExpDate={setExpDate}
      cvc={cvc}
      setCvc={setCvc}
      password={password}
      setPassword={setPassword}
      isPasswordCorrect={isPasswordCorrect}
      CheckPassword={CheckPassword}
      />
</main>
);
}