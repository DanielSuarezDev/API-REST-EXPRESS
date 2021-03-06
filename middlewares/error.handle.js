function logErros(err, req, res, next) {
  console.log('logErros');
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { logErros, errorHandler };
