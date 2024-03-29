import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //check if username and password exist
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            username: {
              equals: username,
            },
          },
          {
            email: {
              equals: email,
            },
          },
        ],
      },
    });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });
    //hassh password
    const hashedPassword = await bcrypt.hash(password, 10);
    //create user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) return res.status(401).json({ message: "User does not exist" });
    //match password
    const validatedPassword = await bcrypt.compare(password, user.password);
    if (!validatedPassword)
      return res.status(401).json({ message: "Invalid credentials" });

    const expireIn = 1000 * 60 * 60 * 24 * 7;
    //set jwsonwebtoken inside cookie
    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: expireIn }
    );
    res
      .cookie("token", token, { httpOnly: true, maxAge: expireIn })
      .json({ message: "Login successfully" });
  } catch (error) {
    console.log(error);
  }
};
