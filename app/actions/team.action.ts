import { create } from "domain";
import prisma from "../../lib/prismadb"

export async function createTeam(userId: string, teamName: string) {
    try {

        const team = await prisma.team.createTeam({
            data: {
                name: teamName,
                members: {
                    connect: {
                        id: userId,
                    },
                },
            },
        });

        return team;
    
    } catch (error) {
        console.error(error);
        throw new Error("Failed to create team with the given name. Please try again with a different name.");
    }
}

export async function getTeams(filter?: string) {
    try {
        const teams = await prisma.team.findMany({
            where: {
                name: {
                    contains: filter,
                    mode: 'insensitive',
                },
            },
            include: {
                members: {
                    include: {
                        user: true,
                    },
                },
            },
        });
        return teams;
    
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get teams. Please enter a valid team id");
    }
}

export async function joinTeam(userId: string, teamId: string) {
    try {
        const team = await prisma.team.update({
            where: { id: teamId },
            data: {
              members: {
                create: {
                  userId: userId,
                },
              },
            },
          });
          return team;

    } catch (error) {
        console.error(error);
        throw new Error("Failed to join team.");
    }
}

export async function leaveTeam(userId: string, teamId: string) {
    try {
        const team = await prisma.team.update({
            where: { id: teamId },
            data: {
              members: {
                deleteMany: {
                  userId_teamId: {
                    userId: userId,
                    teamId: teamId,
                  },
                },
              },
            },
          });
          return team;
        } catch (error) {
          console.error(error);
          throw new Error("Failed to leave team.");
    }
}

export async function getTeamMembers(teamId: string) {
    try {
        const team = await prisma.team.findUnique({
            where: {id: teamId},
            include: {
                members: {
                    include: {
                        user: true,
                    },
                },
            },
        });
        return team? team.members: [];
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get team members. Please enter a valid team id");
    }
}