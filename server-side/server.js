const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const { controller } = require('./controller')

app.get('/', controller.home);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
