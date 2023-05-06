import SearchBar from "@/components/SearchBar/SearchBar";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Anime, AnimeListProps } from "@/components/AnimeList";
import AnimeList from "@/components/AnimeList/AnimeList";
import { useDebounce } from "use-debounce";
import { Heart, Spinner, Star } from "@/icons";

const baseUrl = "https://kitsu.io/api/edge";

interface PaginationData {
  next?: string;
  prev?: string;
}

const getStarredMap = () => {
  const starred = localStorage.getItem("starred");
  return starred
    ? new Map<string, boolean>(Object.entries(JSON.parse(starred)))
    : new Map<string, boolean>();
};

const getFavoritesMap = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites
    ? new Map<string, boolean>(Object.entries(JSON.parse(favorites)))
    : new Map<string, boolean>();
};

/**
 * Renders the home page view.
 *
 * @returns {JSX.Element}
 */
const HomePage = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  const [searchBarValue, setSearchBarValue] = useState("");
  const [debouncedSearchBarValue] = useDebounce(searchBarValue, 1000);

  const [isActiveStarFilter, setIsActiveStarFilter] = useState(false);
  const [isActiveFavoriteFilter, setIsActiveFavoriteFilter] = useState(false);

  const [animeData, setAnimeData] = useState<Array<Anime>>([]);
  const [paginationData, setPaginationData] = useState<PaginationData>({});

  useEffect(() => {
    const fetchAnimeList = async () => {
      const starredMap = getStarredMap();
      const favoritesMap = getFavoritesMap();

      try {
        const { data } = await axios.get(`${baseUrl}/anime`);

        const list = data.data.map((anime: any) => ({
          id: anime.id,
          image: anime.attributes.posterImage.large,
          title: anime.attributes.canonicalTitle,
          rating: anime.attributes.averageRating,
          favoritesCount: anime.attributes.favoritesCount,
          isStarred: !!starredMap.get(anime.id),
          isFavorite: !!favoritesMap.get(anime.id),
        }));

        setAnimeData(list);
        setPaginationData({ next: data.links.next, prev: data.links.prev });
      } catch (e) {
        setAnimeData([]);
        setPaginationData({});
        alert("An error occurred. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnimeList();
  }, []);

  const onPaginateHandler: AnimeListProps["onPaginate"] = async () => {
    if (!paginationData.next) return;

    const starredMap = getStarredMap();
    const favoritesMap = getFavoritesMap();

    try {
      const { data } = await axios.get(paginationData.next);

      const list = data.data.map((anime: any) => ({
        id: anime.id,
        image: anime.attributes.posterImage.large,
        title: anime.attributes.canonicalTitle,
        rating: anime.attributes.averageRating,
        favoritesCount: anime.attributes.favoritesCount,
        isStarred: !!starredMap.get(anime.id),
        isFavorite: !!favoritesMap.get(anime.id),
      }));

      setAnimeData((prev) => prev.concat(list));
      setPaginationData({ next: data.links.next, prev: data.links.prev });
    } catch (e) {
      setAnimeData([]);
      setPaginationData({});
      alert("An error occurred. Please try again.");
    }
  };

  const onToggleFavoriteHandler: AnimeListProps["onToggleFavorite"] = (
    id,
    value
  ) => {
    const favoritesMap = getFavoritesMap();

    if (value) {
      favoritesMap.set(id, true);
    } else {
      favoritesMap.delete(id);
    }

    const json = JSON.stringify(Object.fromEntries(favoritesMap));
    localStorage.setItem("favorites", json);

    const updatedAnimeData = animeData.map((anime) => {
      if (anime.id !== id) return anime;
      return { ...anime, isFavorite: value };
    });
    setAnimeData(updatedAnimeData);
  };

  const onToggleStarredHandler: AnimeListProps["onToggleStarred"] = (
    id,
    value
  ) => {
    const starredMap = getFavoritesMap();

    if (value) {
      starredMap.set(id, true);
    } else {
      starredMap.delete(id);
    }

    const json = JSON.stringify(Object.fromEntries(starredMap));
    localStorage.setItem("starred", json);

    const updatedAnimeData = animeData.map((anime) => {
      if (anime.id !== id) return anime;
      return { ...anime, isStarred: value };
    });
    setAnimeData(updatedAnimeData);
  };

  const filteredAnimeData = useMemo(() => {
    let updatedAnimeData = animeData;

    if (debouncedSearchBarValue) {
      updatedAnimeData = updatedAnimeData.filter((anime) => {
        return anime.title
          .toLowerCase()
          .includes(debouncedSearchBarValue.toLowerCase());
      });
    }

    if (isActiveStarFilter) {
      updatedAnimeData = updatedAnimeData.filter((anime) => anime.isStarred);
    }

    if (isActiveFavoriteFilter) {
      updatedAnimeData = updatedAnimeData.filter((anime) => anime.isFavorite);
    }

    return updatedAnimeData;
  }, [
    animeData,
    debouncedSearchBarValue,
    isActiveStarFilter,
    isActiveFavoriteFilter,
  ]);

  return (
    <>
      <h1 className="text-center font-extrabold text-3xl mb-5">Anime List</h1>

      <div className="flex flex-col md:flex-row md:items-center gap-1 mb-5">
        <div className="flex flex-1 md:flex-1 gap-x-1">
          <p>Filter</p>

          <button onClick={() => setIsActiveStarFilter((prev) => !prev)}>
            <Star
              fill={isActiveStarFilter ? "#fefe08" : "transparent"}
              stroke={isActiveStarFilter ? "#fefe08" : "currentColor"}
            />
          </button>

          <button onClick={() => setIsActiveFavoriteFilter((prev) => !prev)}>
            <Heart
              fill={isActiveFavoriteFilter ? "#ce2a29" : "transparent"}
              stroke={isActiveFavoriteFilter ? "#ce2a29" : "currentColor"}
            />
          </button>
        </div>

        <div className="flex flex-1 md:flex-auto">
          <SearchBar
            onChange={(e) => setSearchBarValue(e.target.value)}
            placeholder="Search anime"
            value={searchBarValue}
          />
        </div>

        <div className="flex flex-1 md:flex-1 md:justify-end">
          <p>
            {filteredAnimeData.length}{" "}
            {filteredAnimeData.length === 1 ? "Result" : "Results"}
          </p>
        </div>
      </div>

      <div className="flex">
        {isLoading && (
          <div className="flex flex-1 justify-center">
            <Spinner />
          </div>
        )}

        {!isLoading && filteredAnimeData.length > 0 && (
          <AnimeList
            data={filteredAnimeData}
            hasMore={!!paginationData.next}
            onPaginate={onPaginateHandler}
            onToggleFavorite={onToggleFavoriteHandler}
            onToggleStarred={onToggleStarredHandler}
          />
        )}

        {!isLoading && filteredAnimeData.length <= 0 && (
          <p className="w-full text-center">No results found.</p>
        )}
      </div>
    </>
  );
};

export default HomePage;
