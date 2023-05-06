import HeartToggleButton from "@/components/HeartToggleButton";
import SearchBar from "@/components/SearchBar/SearchBar";
import StarToggleButton from "@/components/StarToggleButton";
import { Heart, Star } from "@/icons";
import { useState } from "react";

/**
 * Renders the homepage view.
 *
 * @returns {JSX.Element}
 */
const Homepage = (): JSX.Element => {
  const [isActiveStarFilter, setIsActiveStarFilter] = useState(false);
  const [isActiveHeartFilter, setIsActiveHeartFilter] = useState(false);

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
          <SearchBar placeholder="Search anime" />
        </div>

        <div className="flex flex-1 md:flex-1 md:justify-end">
          <p>8 Results</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-7 justify-between">
        <div className="basis-full md:basis-5/12 lg:basis-1/5 h-full relative">
          <img
            className="w-full h-full object-cover"
            src="https://media.kitsu.io/anime/poster_images/1/original.jpg"
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <h3 className="text-white mb-2">
              Cowboy Bebop: Knockin' on Heaven's Door
            </h3>

            <div className="flex">
              <span className="flex flex-1 gap-x-1 items-center text-white">
                <Star fill="currentColor" />
                95.23
              </span>

              <span className="flex flex-1 gap-x-1 items-center text-white">
                <Heart fill="currentColor" />
                500
              </span>
            </div>
          </div>
        </div>

        <div className="basis-full md:basis-5/12 lg:basis-1/5 h-full relative">
          <img
            className="w-full h-full object-cover"
            src="https://media.kitsu.io/anime/poster_images/1/original.jpg"
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <h3 className="text-white mb-2">
              Cowboy Bebop: Knockin' on Heaven's Door
            </h3>

            <div className="flex">
              <span className="flex flex-1 gap-x-1 items-center text-white">
                <Star fill="currentColor" />
                95.23
              </span>

              <span className="flex flex-1 gap-x-1 items-center text-white">
                <Heart fill="currentColor" />
                500
              </span>
            </div>
          </div>
        </div>

        <div className="basis-full md:basis-5/12 lg:basis-1/5 h-full relative">
          <img
            className="w-full h-full object-cover"
            src="https://media.kitsu.io/anime/poster_images/1/original.jpg"
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <h3 className="text-white mb-2">
              Cowboy Bebop: Knockin' on Heaven's Door
            </h3>

            <div className="flex">
              <span className="flex flex-1 gap-x-1 items-center text-white">
                <Star fill="currentColor" />
                95.23
              </span>

              <span className="flex flex-1 gap-x-1 items-center text-white">
                <Heart fill="currentColor" />
                500
              </span>
            </div>
          </div>
        </div>

        <div className="basis-full md:basis-5/12 lg:basis-1/5 h-full relative">
          <img
            className="w-full h-full object-cover"
            src="https://media.kitsu.io/anime/poster_images/1/original.jpg"
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <h3 className="text-white mb-2">
              Cowboy Bebop: Knockin' on Heaven's Door
            </h3>

            <div className="flex">
              <span className="flex flex-1 gap-x-1 items-center text-white">
                <Star fill="currentColor" />
                95.23
              </span>

              <span className="flex flex-1 gap-x-1 items-center text-white">
                <Heart fill="currentColor" />
                500
              </span>
            </div>
          </div>
        </div>

        <div className="basis-full md:basis-5/12 lg:basis-1/5 h-full relative">
          <img
            className="w-full h-full object-cover"
            src="https://media.kitsu.io/anime/poster_images/1/original.jpg"
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-4 py-5"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <h3 className="text-white mb-2">
              Cowboy Bebop: Knockin' on Heaven's Door
            </h3>

            <div className="flex">
              <span className="flex flex-1 gap-x-1 items-center text-white">
                <Star fill="currentColor" />
                95.23
              </span>

              <span className="flex flex-1 gap-x-1 items-center text-white">
                <Heart fill="currentColor" />
                500
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
