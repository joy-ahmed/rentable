import * as bcrypt from "bcrypt";
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

    if(existingUser) return res.status(400).json({ message: "User already exists" });
    //hassh password
    const hashedPassword = await bcrypt.hash(password, 10);
    //create user
    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
        }
    })
    console.log(newUser)
    res.status(201).json({ message: "User created successfully" });

  } catch (error) {
    console.log(error);
  }
};
