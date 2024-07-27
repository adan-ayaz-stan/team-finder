import prisma from "../../lib/prismadb";

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
