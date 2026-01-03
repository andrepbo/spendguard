
'use client';
import { useState } from 'react';

export default function Home() {
  const [income, setIncome] = useState('');
  const [fixed, setFixed] = useState('');
  const [balance, setBalance] = useState('');
  const [spend, setSpend] = useState('');
  const [result, setResult] = useState<string | null>(null);

  function calculate() {
    const renda = Number(income);
    const custo = Number(fixed);
    const dias = 30;
    const sobra = renda - custo;
    const limite = sobra / dias;
    const gasto = Number(spend);

    if (gasto <= limite) setResult('SAFE');
    else if (gasto <= limite * 1.3) setResult('WARNING');
    else setResult('RISK');
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>SpendGuard</h1>

      <input placeholder="Renda mensal" value={income} onChange={e => setIncome(e.target.value)} />
      <input placeholder="Custo fixo mensal" value={fixed} onChange={e => setFixed(e.target.value)} />
      <input placeholder="Saldo atual" value={balance} onChange={e => setBalance(e.target.value)} />
      <input placeholder="Quero gastar" value={spend} onChange={e => setSpend(e.target.value)} />

      <button onClick={calculate}>Decidir</button>

      {result && <p>Status: {result}</p>}
    </main>
  );
}
