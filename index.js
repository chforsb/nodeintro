const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/api', (req, res) => res.json({ message: 'Hello' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log('Test is running on http://localhost:' + PORT)});