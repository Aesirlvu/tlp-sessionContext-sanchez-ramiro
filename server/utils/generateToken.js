import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
