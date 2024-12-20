import { z } from "zod";
import { CharacterSchema } from "../schemas/character";

const PageInfoSchema = z.object({
  totalPages: z.number().nullable(),
  count: z.number(),
  previousPage: z.string().nullable(),
  nextPage: z.string().nullable(),
});

const GetAllCharactersInputSchema = z.object({
  page: z.number().default(1),
  pageSize: z.number().default(8),
});

type GetAllCharactersInput = z.infer<typeof GetAllCharactersInputSchema>;

const ApiReturnSchema = z.object({
  info: PageInfoSchema,
  data: z.array(CharacterSchema),
});

export const getAllCharacters = async (input?: GetAllCharactersInput) => {
  const { page, pageSize } = GetAllCharactersInputSchema.parse(input ?? {});
  const response = await fetch(`https://api.disneyapi.dev/character?page=${page}&pageSize=${pageSize}`);
  const data = await response.json();
  return ApiReturnSchema.parse(data);
}

export const filterCharacter = async (query: string) => {
  const response = await fetch(`https://api.disneyapi.dev/character?name=${encodeURI(query)}`);
  let data = await response.json();
  data.data = Array.isArray(data.data) ? data.data : [data.data];
  return ApiReturnSchema.parse(data);
}