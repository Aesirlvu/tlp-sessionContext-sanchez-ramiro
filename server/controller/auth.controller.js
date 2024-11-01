import { users } from "../model/users.model.js";
import { generateToken } from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return res.status(400).json({
        status: "error",
        message: "Invalid Credentials ❌",
      });
    }

    const token = generateToken(user);
    const { password: _, ...userWithoutPassword } = user;

    // Set cookie and send response
    return res
      .cookie("auth-token", token, {
        httpOnly: true, // Prevents JavaScript access
        secure: true, // Only sent over HTTPS
        sameSite: "none", // Allows cross-site requests
        maxAge: 3600000, // Cookie expires in 1 hour
      })
      .status(200)
      .json({
        status: "Success",
        data: {
          user: userWithoutPassword,
          token,
        },
      });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

export const logout = async (_req, res) => {
  try {
    return res.status(200).json({
      status: "Success",
      message: "User logged out successfully ✅",
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};
