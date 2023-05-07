import CharacterList from "@/components/CharacterList";
import EpisodeList from "@/components/EpisodeList/EpisodeList";
import { Check, ChevronLeft, Heart, Star } from "@/icons";
import AnimeDetails from "@/types/AnimeDetails";
import Link from "next/link";

interface AnimePageProps {
  data: AnimeDetails;
}

/**
 * Renders the anime page view.
 *
 * @param {AnimePageProps} props
 * @returns {JSX.Element}
 */
const AnimePage = ({ data }: AnimePageProps): JSX.Element => {
  return (
    <>
      <h1 className="text-center font-extrabold text-3xl mb-5">{data.name}</h1>

      <div className="mb-3">
        <Link className="inline-flex items-center" href="/" title="Go back">
          <ChevronLeft /> Back
        </Link>
      </div>

      <div className="flex gap-7 flex-col md:flex-row">
        <div className="flex flex-none flex-col gap-y-2">
          <img
            className="h-80 object-contain object-left"
            src={data.image}
            alt={data.name}
          />

          <div className="flex">
            <button>
              <Star />
            </button>
            {data.averageRating} from {data.userCount}{" "}
            {data.userCount === 1 ? "user" : "users"}
          </div>

          <div className="flex">
            <button>
              <Heart />
            </button>
            {data.favoritesCount}{" "}
            <span className="ml-5">Rank #{data.popularityRank}</span>
          </div>

          <p>
            Rated {data.ageRating}: {data.ageRatingGuide}
          </p>
          <p>Aired on {data.startDate}</p>
          <p>Ongoing or Ended on {data.endDate}</p>
          <p>Type: {data.showType}</p>
        </div>

        <div className="flex flex-1 flex-col gap-y-7">
          <p className="whitespace-pre-wrap">{data.description}</p>

          <div>
            <h2 className="font-bold mb-3">Characters</h2>
            <CharacterList data={data.characters} />
          </div>

          <div>
            <h2 className="font-bold mb-3">Episodes</h2>
            <EpisodeList data={data.episodes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimePage;
