import { Router } from "express";
import { User } from "../models/user.js";
export const login = async (req, res) => {
    // TODO: If the user exists and the password is correct, return a JWT token
    // Extract username and password from request body
    const { username, password } = req.body();
    // Find the user in the database by username
    const user = await User.findOne({ where: { username } });
    if (user === null) {
        console.log("Not found!");
    }
    else {
        console.log(idrt instanceof Project); // true
        console.log(project.title); // 'My Title'
    }
    // If user is not found, send an authentication failed response
    // Compare the provided password with the stored hashed password
    // If password is invalid, send an authentication failed response
    // Get the secret key from environment variables
    // Generate a JWT token for the authenticated user
    // Return the token as a JSON response
};
// Create a new router instance
const router = Router();
// POST /login - Login a user
router.post("/login", login);
// Export the router instance
export default router;
