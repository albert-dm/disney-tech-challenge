import { createFileRoute } from "@tanstack/react-router";
import { getOneCharacter } from "../../services/disney-api";

import noPicImage from "../../static/image/no-pic.png";
import { formatDate } from "../../helpers/date";
import { AnchorButton } from "../../components/button";

export const Route = createFileRoute("/character/$character")({
  component: CharacterComponent,
  loader: async ({ params }) => {
    const { character } = params;
    return await getOneCharacter(character);
  },
});

function CharacterComponent() {
  const { data } = Route.useLoaderData();
  return (
    <section className="bg-background py-20 px-16 flex flex-col gap-4 justify-center items-center">
      <article className="flex md:flex-row flex-col gap-4 w-full">
        <img
          src={data.imageUrl ?? noPicImage}
          alt={data.name}
          className="w-96 object-cover object-top rounded-2xl"
          style={{ height: "500px" }}
        />
        <div>
          <h2 className="text-3xl font-semibold">{data.name}</h2>
          <br />
          <p className="text-sm">Last Updated {formatDate(data.updatedAt)}</p>

          {data.films.length > 0 && (
            <>
              <br />
              <h3 className="text-lg font-semibold">Featured Films</h3>
              <ul className="list-disc list-inside pl-2">
                {data.films.map((film) => (
                  <li key={film}>{film}</li>
                ))}
              </ul>
            </>
          )}

          {data.shortFilms.length > 0 && (
            <>
              <br />
              <h3 className="text-lg font-semibold">Short Films</h3>
              <ul className="list-disc list-inside pl-2">
                {data.shortFilms.map((film) => (
                  <li key={film}>{film}</li>
                ))}
              </ul>
            </>
          )}

          {data.tvShows.length > 0 && (
            <>
              <br />
              <h3 className="text-lg font-semibold">TV Shows</h3>
              <ul className="list-disc list-inside pl-2">
                {data.tvShows.map((show) => (
                  <li key={show}>{show}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </article>
      <AnchorButton variant="primary" href={data.sourceUrl} target="_blank">
        Explore More Character Details
      </AnchorButton>
    </section>
  );
}
