export const delayMiddleware = (req, res, next) => {
  const delay = req.headers["delay-ms"] || 0;

  if (delay > 0 && delay < 10_000) {
    setTimeout(() => {
      next();
    }, delay);
  } else {
    next();
  }
};
