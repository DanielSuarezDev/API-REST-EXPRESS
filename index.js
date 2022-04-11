const express = require('express');
const routerApi = require('./routes');
const app = express();
const { logErros, errorHandler } = require('./middlewares/error.handle');
const port = 3000;

app.use(express.json());

routerApi(app);

app.use(logErros);
app.use(errorHandler);

app.listen(port, () => {
  console.log('mi port' + port);
});
