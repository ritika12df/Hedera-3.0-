# 💰 Hedera Token Vault

A modern web app to create, transfer, and view balances of fungible tokens on Hedera Hashgraph using the Token Service. Built with React (frontend), Node.js (backend), and the Hedera JavaScript SDK.

🌟 Features

✅ Create new fungible tokens on Hedera Testnet

📤 Transfer tokens to other Hedera accounts

📄 View list of created tokens

🔍 Check token balances for any account

💬 Live transaction logs

🖥️ Tech Stack

- React
- Node.js + Express
- Hedera Hashgraph
- @hashgraph/sdk

📦 Prerequisites
Node.js (v18+ recommended)

Hedera Testnet Account: Create on hedera portal

.env file with:

HEDERA_ACCOUNT_ID=0.0.xxxxxxx

HEDERA_PRIVATE_KEY=302e02...your-private-key

🚀 Getting Started

1. Clone the Repo

git clone https://github.com/your-username/hedera-token-vault.git

cd hedera-token-vault

2. Backend Setup

cd backend

npm install

# Create a .env file

touch .env

Paste your Hedera testnet credentials into .env:

HEDERA_ACCOUNT_ID=0.0.xxxxx
HEDERA_PRIVATE_KEY=302e02...your-private-key

Start the backend server:

node index.js

# Server running on http://localhost:8080

3. Frontend Setup

cd ../frontend

npm install

npm start
# App running on http://localhost:3000

🧠 How It Works

Token Creation: Uses TokenCreateTransaction() with infinite supply

Transfer: Uses TransferTransaction() to send tokens

Balance Check: Queries account balances using AccountBalanceQuery


