import jwt from "jsonwebtoken";

const authToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token invalido" });
    }

    req.user = decoded;
    next();
  });
};

export default authToken;
