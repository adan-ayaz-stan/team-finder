import prisma from "../../lib/prismadb";
import { UpdateUserParams, GetUserByCategoryParams, User } from "./shared.types";

export async function getUserProfile(userId: string): Promise<User> {  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        team: true, // Include team information if needed
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw new Error('Failed to retrieve user profile');
  }
}


export async function updateProfile(params: UpdateUserParams) {
  try {
    const updateuser = await prisma.user.update({
      where: { email: params.email },
      data: {
        name: params.name,
        discordUsername: params.discordUsername,
        bio: params.bio,
        techStack: params.techStack,
        category: params.category,
      },
    });
    return updateuser;
  } catch (error) {
    console.error("Failed to update profile:", error);
    throw new Error("Failed to update profile");
  }
}

export async function getUsersByCategory(params: GetUserByCategoryParams) {
  try {
    const { category } = params;

    const users = await prisma.user.findMany({
      where: {
        category: category || undefined,
      },
    });
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw new Error("Failed to fetch users");
  }
}
