import { user } from "@prisma/client";

export type CreateUserData = Omit<user, 'id'>;
export type UpdateUserData = Partial<user>;