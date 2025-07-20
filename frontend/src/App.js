import React, { useState } from 'react';
import './index.css';

const API = 'http://127.0.0.1:8080';

function App() {
  const [tokenName, setTokenName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [supply, setSupply] = useState('');
  const [tokens, setTokens] = useState([]);
  const [toAccountId, setToAccountId] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [amount, setAmount] = useState('');
  const [logs, setLogs] = useState([]);
 const [accountId, setAccountId] = useState('');
 const [selectedTokenId, setSelectedTokenId] = useState('');
const [balance, setBalance] = useState(null);

  const createToken = async () => {
    const res = await fetch(`${API}/create-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: tokenName, symbol, initialSupply: parseInt(supply) }),
    });
    const data = await res.json();
    setTokens([...tokens, data]);
    setLogs([...logs, `Created token ${data.tokenId}`]);
  };

  const sendToken = async () => {
    const res = await fetch(`${API}/transfer-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tokenId, toAccountId, amount: parseInt(amount) }),
    });
    const data = await res.json();
    setLogs([...logs, `Transferred ${amount} tokens to ${toAccountId}`]);
  };

  const fetchBalance = async () => {
  const res = await fetch(`${API}/balance/${accountId}/${selectedTokenId}`);
  const data = await res.json();
  setBalance(data.balance);
  setLogs([...logs, `Balance of ${accountId}: ${data.balance}`]);
};

  return (
    <div className="container">
      <h1>💰 Hedera Token Vault</h1>

      <div className="section">
        <h2>Create Token</h2>
        <input placeholder="Token Name" onChange={e => setTokenName(e.target.value)} />
        <input placeholder="Symbol" onChange={e => setSymbol(e.target.value)} />
        <input placeholder="Initial Supply" type="number" onChange={e => setSupply(e.target.value)} />
        <button onClick={createToken}>Create</button>
      </div>

      <div className="section">
        <h2>Send Token</h2>
        <input placeholder="Token ID" onChange={e => setTokenId(e.target.value)} />
        <input placeholder="To Account ID" onChange={e => setToAccountId(e.target.value)} />
        <input placeholder="Amount" type="number" onChange={e => setAmount(e.target.value)} />
        <button onClick={sendToken}>Send</button>
      </div>

      <div className="section">
        <h2>Token List</h2>
        <ul>
          {tokens.map(t => (
            <li key={t.tokenId}>
              {t.name} ({t.symbol}) — {t.tokenId}
            </li>
          ))}
        </ul>
      </div>
    
      <div className="section">
        <h2>Transaction Log</h2>
        <ul>
          {logs.map((log, idx) => (
            <li key={idx}>{log}</li>
          ))}
        </ul>
      </div>

      <div className="section">
  <h2>Check Token Balance</h2>
  <input placeholder="Your Account ID" onChange={e => setAccountId(e.target.value)} />
  <input placeholder="Token ID" onChange={e => setSelectedTokenId(e.target.value)} />
  <button onClick={fetchBalance}>Check Balance</button>
  {balance !== null && <p>Balance: {balance}</p>}
</div>

    </div>
  );
}

export default App;
