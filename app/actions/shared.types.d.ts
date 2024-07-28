
export interface User {
    id: string;
    clerkId?: string;
    name?: string;
    email?: string;
    discordUsername?: string;
    category: string;
    bio?: string;
    techStack: string[];
    teamId?: string; // Reference to the team if needed
    team?: Team; // Optional relation
  }
  
  export interface Team {
    id: string;
    name: string;
    description: string;
    rolesNeeded: string[];
    createdAt: Date;
    members?: User[]; // Optional array of members
  }
  
  interface RoleData {
    roleTitle: string[];
    skillNeeded: string[];
  }
  
  export interface TeamData {
    name: string;
    description: string;
    location: string;
    requiredRoles: RoleData[];
  }

  export interface FilterParams {
    location?: string;
    roleTitle?: string[];
    skillNeeded?: string[];
  }

export interface GetAllUsersParams {
  page?: number;
  pageSize?: number;
  filter?: string;
  searchQuery?: string; // Add searchQuery parameter
}


export interface CreateUserParams {
    name: string;
    email: string;
    discordUsername: string;
    bio?: string;
    techStack?: string[];
    category: string;
  }

export interface UpdateUserParams {
  name: string;
  email: string;
  discordUsername: string;
  bio?: string;
  techStack?: string[];
  category: string;
}

export interface GetUserByCategoryParams {
    category?: string;
  }

