import prisma from "../../lib/prismadb";
import { CreateUserParams } from "./shared.types";

export async function createUser(userData: CreateUserParams) {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        discordUsername: userData.discordUsername,
        bio: userData.bio,
        techStack: userData.techStack || [],
        category: userData.category,
      },
    });
    return newUser;
  } catch (error) {
    console.error("Failed to create User", error);
    throw new Error('Failed to create User');
  }
}

export async function getUserProfile() {
  try {
  } catch (error) {}
}

export async function updateProfile(req, res) {
  try {
    const {
      id,
      name,
      email,
      image,
      hashedPassword,
      discordUsername,
      bio,
      techStack,
      category,
      teamId,
    } = req.body;
  } catch (error) {}
}

export async function getUsers() {
  try {
  } catch (error) {}
}
