import { Router, Request, Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  // Extract username and password from request body
  const { username, password } = req.body();

  // Find the user in the database by username
  // SG: https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  const user = await User.findOne({ where: { username } });
  if (user === null) {
    // If user is not found, send an authentication failed response
    console.log("User Not found!");
    return res.status(401).json({ message: "Authentication failed" });
  } else {
    console.log(user instanceof User); // true
    console.log(`${user.username} found!`); // 'username'
  }

  // Compare the provided password with the stored hashed password
  // SG: https://www.npmjs.com/package/bcrypt
  // Load hash from your password DB.
  const validPassword = await bcrypt.compare(password, user.password);

  // If password is invalid, send an authentication failed response
  if (!validPassword) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY;

  // SG: add step ti check if secretKey is set in evnironment variables
  if (!secretKey) {
    return res.status(500).json({ message: "JWT_SECRET_KEY not set" });
  }

  // Generate a JWT token for the authenticated user
  // SG: https://www.npmjs.com/package/jsonwebtoken
  // SG: username wraped in object so it is included for later access with token
  const token = await jwt.sign({ username }, secretKey, { expiresIn: "1h" });

  // Return the token as a JSON response
  return res.status(200).json({ token });
};

// Create a new router instance
const router = Router();

// POST /login - Login a user
router.post("/login", login);

// Export the router instance
export default router;
