import { Link } from "@tanstack/react-router";
import { Character } from "../../schemas/character";

import noPicImage from '../../static/image/no-pic.png'

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article className="bg-white shadow w-80">
      <img
        src={character.imageUrl ?? noPicImage}
        alt={character.name}
        className="w-full h-96 object-cover object-top"
      />
      <div className="p-4 flex-col gap-8 text-center m-auto">
        <h3 className="font-bold text-lg mb-4">{character.name}</h3>
        {character.films.length > 0 && (
          <div className="mb-3">
            <h4 className="font-semibold">Featured Films</h4>
            <p className="text-sm line-clamp-2" title={character.films.join(", ")}>{character.films.join(", ")}</p>
          </div>
        )}
        <Link
          to={`/character/${character._id}`}
          className="underline font-bold"
        >
          VIEW PROFILE
        </Link>
      </div>
    </article>
  );
}

function CharacterCardSkeleton(){
  return (
    <article className="bg-slate-500 shadow w-80 h-96 animate-pulse">
    </article>
  )
}

CharacterCard.Skeleton = CharacterCardSkeleton;
