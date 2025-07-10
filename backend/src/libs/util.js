import jwt from 'jsonwebtoken';

export const generateJwtToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '3d',
  });

  res.cookie('jwt', {
    maxAge: 3 * 24 * 60 * 60 * 1000, //ms
    httpOnly: true, //prevent XSS cross-site scripting attacks
    // sameSite: "strict", //CSRF
    secure: process.env.NODE_ENV !== 'development',
  });

  return token;
};

export const toSnakeCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('_')
    .toLowerCase();
};
