const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('收到 LINE Webhook:', req.body);
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('LINE Bot is alive!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
