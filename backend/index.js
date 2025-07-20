const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createToken, transferToken, getBalance } = require('./hedera');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/create-token', async (req, res) => {
  const { name, symbol, initialSupply } = req.body;
  const token = await createToken(name, symbol, initialSupply);
  res.json(token);
});

app.post('/transfer-token', async (req, res) => {
  const { tokenId, toAccountId, amount } = req.body;
  const result = await transferToken(tokenId, toAccountId, amount);
  res.json(result);
});

app.get('/balance/:accountId', async (req, res) => {
  const { accountId } = req.params;
  const balance = await getBalance(accountId);
  res.json(balance);
});

app.get('/balance/:accountId/:tokenId', async (req, res) => {
  const { accountId, tokenId } = req.params;
  try {
    const balance = await getBalance(accountId, tokenId);
    res.json({ balance });
  } catch (e) {
    res.status(500).send("Error fetching balance");
  }
});

app.listen(8080, () => console.log('Server running on port 8080'));
