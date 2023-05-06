import HeartToggleButton from "@/components/HeartToggleButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import StarToggleButton from "@/components/StarToggleButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { Anime } from "@/components/AnimeList";
import AnimeList from "@/components/AnimeList/AnimeList";
import { Spinner } from "@/icons";

const baseUrl = "https://kitsu.io/api/edge";

interface PaginationData {
  next?: string;
  prev?: string;
}

/**
 * Renders the homepage view.
 *
 * @returns {JSX.Element}
 */
const Homepage = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  const [searchBarValue, setSearchBarValue] = useState("");

  const [isActiveStarFilter, setIsActiveStarFilter] = useState(false);
  const [isActiveHeartFilter, setIsActiveHeartFilter] = useState(false);

  const [animeData, setAnimeData] = useState<Array<Anime>>([]);
  const [paginationData, setPaginationData] = useState<PaginationData>({});

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/anime`);

        const list = data.data.map((anime: any) => ({
          id: anime.id,
          image: anime.attributes.posterImage.large,
          title: anime.attributes.canonicalTitle,
          rating: anime.attributes.averageRating,
          favoritesCount: anime.attributes.favoritesCount,
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

  const onPaginateHandler = async () => {
    if (!paginationData.next) return;

    try {
      const { data } = await axios.get(paginationData.next);

      const list = data.data.map((anime: any) => ({
        id: anime.id,
        image: anime.attributes.posterImage.large,
        title: anime.attributes.canonicalTitle,
        rating: anime.attributes.averageRating,
        favoritesCount: anime.attributes.favoritesCount,
      }));

      setAnimeData((prev) => prev.concat(list));
      setPaginationData({ next: data.links.next, prev: data.links.prev });
    } catch (e) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <h1 className="text-center font-extrabold text-3xl mb-5">Anime List</h1>

      <div className="flex flex-col md:flex-row md:items-center gap-1 mb-5">
        <div className="flex flex-1 md:flex-1 gap-x-1">
          <p>Filter</p>
          <StarToggleButton
            active={isActiveStarFilter}
            onToggle={() => setIsActiveStarFilter((prev) => !prev)}
          />
          <HeartToggleButton
            active={isActiveHeartFilter}
            onToggle={() => setIsActiveHeartFilter((prev) => !prev)}
          />
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
            {animeData.length} {animeData.length === 1 ? "Result" : "Results"}
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        {isLoading ? (
          <Spinner />
        ) : (
          <AnimeList
            data={animeData}
            hasMore={!!paginationData.next}
            onPaginate={onPaginateHandler}
          />
        )}
      </div>
    </>
  );
};

export default Homepage;
