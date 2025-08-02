# 💰 Hedera Token Vault

A modern web app to create, transfer, and view balances of fungible tokens on Hedera Hashgraph using the Token Service. Built with React (frontend), Node.js (backend), and the Hedera JavaScript SDK.

🌟 Features

✅ Create new fungible tokens on Hedera Testnet

📤 Transfer tokens to other Hedera accounts

📄 View list of created tokens

🔍 Check token balances for any account

💬 Live transaction logs

## LIVE PROJECT LINK

https://hedera-token-vault.netlify.app


### 🖥️ Tech Stack

- React
- Node.js + Express
- Hedera Hashgraph
- @hashgraph/sdk

#### 📦 Prerequisites

Node.js (v18+ recommended)

#### Hedera Testnet Account: 

Create hedera testnet account and fill the in backend .env file with:

- HEDERA_ACCOUNT_ID=0.0.xxxxxxx

- HEDERA_PRIVATE_KEY=302e02...your-private-key

### 🚀 Getting Started

1. Clone the Repo
```bash
git clone https://github.com/ritika12df/Hedera-3.0-.git
cd Hedera-3.0-
```

2. Frontend Setup
```bash
cd frontend
npm install
npm start
```

3. Backend Setup
```bash
cd backend
npm install
node index.js
```

### 🧠 How It Works

- Token Creation: Uses TokenCreateTransaction() with infinite supply

- Transfer: Uses TransferTransaction() to send tokens

- Balance Check: Queries account balances using AccountBalanceQuery

#### 👥 Contributors

Ritika Srivastava 

#### Contributing

Feel free to submit issues and pull requests to improve the project!




