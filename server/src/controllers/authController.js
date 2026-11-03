import {createPool} from "../../db/index.js";
import {comparePasswords, hashPassword} from "../utils/hashPassword.js";

const pool = createPool();

export async function registerUser(req, res) {
    try {
        const { firstName, lastName, username, email, password } = req.body;

        if (!firstName || !lastName || !username || !email || !password) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        const existingUser = await pool.query(
            'SELECT username, email FROM users WHERE username = $1 OR email = $2',
            [username, email]
        );

        for (const user of existingUser.rows) {
            if (user.username === username) {
                return res.status(409).json({
                    error: "USERNAME_TAKEN"
                })
            }

            if (user.email === email) {
                return res.status(409).json({
                    error: "EMAIL_TAKEN"
                })
            }
        }

        const hashedPassword = await hashPassword(password);

        const result = await pool.query(
            'INSERT INTO users (firstname, lastname, username, email, password_hash, verification_token)' +
            'VALUES ($1, $2, $3, $4, $5, $6)' +
            'RETURNING id',
            [firstName, lastName, username, email, hashedPassword, verificationToken]
        );


        return res.status(201).json({
            message: "Account created!",
        })
    } catch (err) {
        console.error("Registration failed:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}