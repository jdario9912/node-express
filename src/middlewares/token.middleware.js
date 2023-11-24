export const cookieMiddleware = (req, res, next) => {
  const cookies = req.cookies;
  const token = req.headers["x-acces-token"];
  console.log(cookies, token);

  next();
};

// 1:41
