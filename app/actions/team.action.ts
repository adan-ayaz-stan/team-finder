import prisma from "../../lib/prismadb"
import { TeamData, FilterParams } from "./shared.types";


export async function createTeam(teamData: TeamData) {
  try {
    const team = await prisma.team.create({
      data: {
        name: teamData.name,
        description: teamData.description,
        location: teamData.location,
        requiredRoles: {
          create: teamData.requiredRoles.map(role => ({
            roleTitle: role.roleTitle,
            skillNeeded: role.skillNeeded,
          })),
        },
      },
      include: {
        roles: true,
      },
    });

    return team;
  } catch (error) {
    console.error("Failed to create team:", error);
    throw new Error("Failed to create team");
  }
}


export async function findTeams(filters: FilterParams) {
    try {
      const teams = await prisma.team.findMany({
        where: {
          location: filters.location,
          requiredRoles: {
            some: {
              roleTitle: {
                hasSome: filters.roleTitle,
              },
              skillNeeded: {
                hasSome: filters.skillNeeded,
              },
            },
          },
        },
        include: {
          requiredRoles: true,
          members: true,
        },
      });
  
      return teams;
    } catch (error) {
      console.error("Failed to get teams:", error);
      throw new Error("Failed to get teams. Please enter a valid team id.");
    }
  }

export async function joinTeam(userId, teamId) {
    try {
        const user = await prisma.user.update({
            where: { id: userId },
            data: {
                teamId: teamId,
            },
        });
        return user;

    } catch (error) {
        console.error(error);
        throw new Error("Failed to join team.");
    }
}

export async function leaveTeam(userId) {
    try {
        const user = await prisma.user.update({
            where: { id: userId },
            data: {
                teamId: null,
            },
        });
        return user;

    } catch (error) {
        console.error(error);
        throw new Error("Failed to leave team.");
    }
}

export async function getTeamMembers(teamId) {
    try {
        const members = await prisma.user.findMany({
            where: { teamId: teamId },
        });
        return members;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get team members. Please enter a valid team id.");
    }
}
