import CharacterList from "@/components/CharacterList";
import { EpisodeListProps } from "@/components/EpisodeList";
import EpisodeList from "@/components/EpisodeList/EpisodeList";
import getFavoritesMap from "@/helpers/getFavoritesMap";
import getStarredMap from "@/helpers/getStarredMap";
import getWatchedEpisodesMap from "@/helpers/getWatchedEpisodesMap";
import { Check, ChevronLeft, Heart, Star } from "@/icons";
import AnimeDetails from "@/types/AnimeDetails";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import internal from "stream";

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
  const [episodesData, setEpisodesData] = useState<EpisodeListProps["data"]>(
    () => data.episodes.map((episode) => ({ ...episode, isWatched: false }))
  );

  useEffect(() => {
    const watchedMap = getWatchedEpisodesMap();

    const updatedEpisodesData = data.episodes.map((episode) => {
      const episodes = watchedMap.get(data.id) ?? [];
      return { ...episode, isWatched: episodes.includes(episode.id) };
    });

    return setEpisodesData(updatedEpisodesData);
  }, [data.episodes]);

  const [isActiveStarFilter, setIsActiveStarFilter] = useState(false);
  const [isActiveFavoriteFilter, setIsActiveFavoriteFilter] = useState(false);

  const onStarredButtonToggle = (value: boolean) => {
    const starredMap = getStarredMap();

    if (value) {
      starredMap.set(data.id, true);
    } else {
      starredMap.delete(data.id);
    }

    const json = JSON.stringify(Object.fromEntries(starredMap));
    localStorage.setItem("starred", json);

    setIsActiveStarFilter((prev) => !prev);
  };

  const onFavoriteButtonToggle = (value: boolean) => {
    const favoritesMap = getFavoritesMap();

    if (value) {
      favoritesMap.set(data.id, true);
    } else {
      favoritesMap.delete(data.id);
    }

    const json = JSON.stringify(Object.fromEntries(favoritesMap));
    localStorage.setItem("favorites", json);

    setIsActiveFavoriteFilter((prev) => !prev);
  };

  const onToggleWatchedHandler: EpisodeListProps["onToggleWatched"] = (
    id,
    value
  ) => {
    const watched = getWatchedEpisodesMap();

    const watchedEpisodes = watched.get(data.id) ?? [];
    const newWatchedEpisodes = value
      ? [...watchedEpisodes, id]
      : watchedEpisodes.filter((episode) => episode !== id);

    watched.set(data.id, newWatchedEpisodes);

    const json = JSON.stringify(Object.fromEntries(watched));
    localStorage.setItem("watched", json);

    const newEpisodesData = episodesData.map((episode) => {
      if (episode.id !== id) return episode;
      return { ...episode, isWatched: value };
    });
    setEpisodesData(newEpisodesData);
  };

  useEffect(() => {
    const starredMap = getStarredMap();
    setIsActiveStarFilter(!!starredMap.get(data.id));

    const favoritesMap = getFavoritesMap();
    setIsActiveFavoriteFilter(!!favoritesMap.get(data.id));
  }, []);

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
            <button onClick={() => onStarredButtonToggle(!isActiveStarFilter)}>
              <Star
                fill={isActiveStarFilter ? "#fefe08" : "transparent"}
                stroke={isActiveStarFilter ? "#fefe08" : "currentColor"}
              />
            </button>
            {data.averageRating} from {data.userCount}{" "}
            {data.userCount === 1 ? "user" : "users"}
          </div>

          <div className="flex">
            <button
              onClick={() => onFavoriteButtonToggle(!isActiveFavoriteFilter)}
            >
              <Heart
                fill={isActiveFavoriteFilter ? "#ce2a29" : "transparent"}
                stroke={isActiveFavoriteFilter ? "#ce2a29" : "currentColor"}
              />
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
            <EpisodeList
              data={episodesData}
              onToggleWatched={onToggleWatchedHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimePage;
