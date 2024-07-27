import prisma from "../../lib/prismadb"

export async function createTeam(userId, teamName, description, rolesNeeded) {
    try {
        const team = await prisma.team.create({
            data: {
                name: teamName,
                description: description,
                rolesNeeded: rolesNeeded,
                creatorId: userId,
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

export async function getTeams(filter) {
    try {
        const teams = await prisma.team.findMany({
            where: {
                name: {
                    contains: filter,
                    mode: 'insensitive',
                },
            },
            include: {
                members: true,
            },
        });
        return teams;
    
    } catch (error) {
        console.error(error);
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
