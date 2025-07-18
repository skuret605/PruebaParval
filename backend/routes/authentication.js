import { Router } from "express";
const router = Router();
import jwt from "jsonwebtoken";

const users = [
  { username: "admin", password: "admin", role: "admin" },
  { username: "analyst", password: "analyst", role: "analyst" },
];

router.post("/", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Clave incorrecta" });
  }

  const token = jwt.sign(
    { username: user.username, role: user.role },
    "secret",
    {
      expiresIn: "1h",
    }
  );

  res.json({ token });
});

export default router;
