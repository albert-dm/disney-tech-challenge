import { z } from "zod";


export const USER_PROFILE_COOKIE_NAME = 'userProfile';

export const UserSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  birthDate: z.string().min(10, "Birth date is required"),
  city: z.string().optional(),
  state: z.string().optional(),
  favoriteCharacter: z.string().optional(),
  favoriteRide: z.string().optional(),
  favoriteMovie: z.string().optional(),
  favoritePark: z.string().optional(),
  updatedAt: z.string(),
});

export type User = z.infer<typeof UserSchema>;