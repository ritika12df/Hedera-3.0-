const {
  Client,
  PrivateKey,
  AccountId,
  TokenCreateTransaction,
  TokenType,
  TokenSupplyType,
  Hbar,
  TransferTransaction,
  AccountBalanceQuery,
} = require('@hashgraph/sdk');

require('dotenv').config();

const operatorId = AccountId.fromString(process.env.HEDERA_ACCOUNT_ID);
const operatorKey = PrivateKey.fromString(process.env.HEDERA_PRIVATE_KEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);

async function createToken(name, symbol, initialSupply) {
  const tx = await new TokenCreateTransaction()
    .setTokenName(name)
    .setTokenSymbol(symbol)
    .setDecimals(2)
    .setInitialSupply(initialSupply)
    .setTokenType(TokenType.FungibleCommon)
    .setSupplyType(TokenSupplyType.Infinite)
    .setTreasuryAccountId(operatorId)
    .freezeWith(client)
    .sign(operatorKey);

  const submitTx = await tx.execute(client);
  const receipt = await submitTx.getReceipt(client);
  return {
    tokenId: receipt.tokenId.toString(),
    name,
    symbol,
    initialSupply,
  };
}

async function transferToken(tokenId, toAccountId, amount) {
  const tx = await new TransferTransaction()
    .addTokenTransfer(tokenId, operatorId, -amount)
    .addTokenTransfer(tokenId, toAccountId, amount)
    .freezeWith(client)
    .sign(operatorKey);

  const submitTx = await tx.execute(client);
  const receipt = await submitTx.getReceipt(client);
  return { status: receipt.status.toString() };
}

async function getBalance(accountId) {
  const balance = await new AccountBalanceQuery()
    .setAccountId(accountId)
    .execute(client);
  return balance.tokens;
}

async function getBalance(accountId, tokenId) {
  const query = await new AccountBalanceQuery().setAccountId(accountId).execute(client);
  const tokenBalance = query.tokens._map.get(tokenId); // get token balance
  return tokenBalance?.toString() || "0";
}


module.exports = { createToken, transferToken, getBalance };
