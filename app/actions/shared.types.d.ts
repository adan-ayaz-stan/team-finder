export interface GetAllUsersParams {
  page?: number;
  pageSize?: number;
  filter?: string;
  searchQuery?: string; // Add searchQuery parameter
}

export interface UpdateUserParams {
  name: string;
  email: string;
  discordUsername: string;
  bio?: string;
  techStack?: string[];
  category: string;
}
