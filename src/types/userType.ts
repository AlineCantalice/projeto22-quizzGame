import { user } from "@prisma/client";

export type CreateUserData = Omit<user, 'id'>;