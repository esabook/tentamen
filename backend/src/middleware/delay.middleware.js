export const delayMiddleware = (req, res, next) => {
  const delay = process.env.RESPONSE_DELAY_MS || 0;

  if (delay > 0) {
    setTimeout(() => {
      next();
    }, delay);
  } else {
    next();
  }
};
