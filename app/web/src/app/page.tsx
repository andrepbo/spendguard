"use client";
import { useState } from "react";

export default function Home() {
  const [income, setIncome] = useState("");
  const [fixed, setFixed] = useState("");
  const [balance, setBalance] = useState("");
  const [spend, setSpend] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function calculate() {
    const renda = Number(income);
    const custo = Number(fixed);
    const saldo = Number(balance);
    const gasto = Number(spend);

    const dias = 30;
    const sobraMensal = renda - custo;
    const limitePlanejamento = sobraMensal / dias;
    const limiteCaixa = saldo;

    const limiteSeguro = Math.min(limitePlanejamento, limiteCaixa);

    if (gasto <= limiteSeguro) {
      setResult("SAFE");
    } else if (gasto <= limiteSeguro * 1.3) {
      setResult("WARNING");
    } else {
      setResult("RISK");
    }
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>SpendGuard</h1>

      <input
        placeholder="Renda mensal"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <input
        placeholder="Custo fixo mensal"
        value={fixed}
        onChange={(e) => setFixed(e.target.value)}
      />
      <input
        placeholder="Saldo atual"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />
      <input
        placeholder="Quero gastar"
        value={spend}
        onChange={(e) => setSpend(e.target.value)}
      />

      <button onClick={calculate}>Decidir</button>

      {result && <p>Status: {result}</p>}
    </main>
  );
}
