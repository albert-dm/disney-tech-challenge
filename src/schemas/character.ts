import { z } from "zod";

export const CharacterSchema = z.object({
  _id: z.number(),
  films: z.array(z.string()),
  shortFilms: z.array(z.string()),
  tvShows: z.array(z.string()),
  videoGames: z.array(z.string()),
  parkAttractions: z.array(z.string()),
  allies: z.array(z.string()),
  enemies: z.array(z.string()),
  sourceUrl: z.string(),
  name: z.string(),
  imageUrl: z.string().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  url: z.string(),
  __v: z.number(),
});

export type Character = z.infer<typeof CharacterSchema>;