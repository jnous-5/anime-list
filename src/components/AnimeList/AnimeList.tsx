import { Star, Heart, Spinner } from "@/icons";
import { AnimeListProps } from ".";
import styles from "./AnimeList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

/**
 * Renders a list of anime.
 *
 * @param {AnimeListProps} props
 * @returns {JSX.Element}
 */
const AnimeList = ({
  data,
  hasMore = false,
  onPaginate,
}: AnimeListProps): JSX.Element => {
  const Loader = (
    <div className="flex basis-full justify-center">
      <Spinner />
    </div>
  );

  return (
    <div className={styles.container}>
      <InfiniteScroll
        className={`${styles.wrapper} flex flex-wrap`}
        style={{ overflow: "visible" }}
        dataLength={data.length}
        hasMore={hasMore}
        loader={Loader}
        next={() => onPaginate?.()}
      >
        {data.map((anime) => (
          <div key={anime.id} className={`${styles.item} flex-0 h-96 relative`}>
            <img
              className="w-full h-full object-cover"
              src={anime.image}
              alt={anime.title}
            />
            <div
              className={`${styles.caption} absolute bottom-0 left-0 right-0 px-4 py-5`}
            >
              <h3 className="text-white mb-2">{anime.title}</h3>

              <div className="flex">
                <span className="flex flex-1 gap-x-1 items-center text-white">
                  <Star fill="currentColor" />
                  {anime.rating}
                </span>

                <span className="flex flex-1 gap-x-1 items-center text-white">
                  <Heart fill="currentColor" />
                  {anime.favoritesCount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default AnimeList;
