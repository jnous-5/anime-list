import CharacterList from "@/components/CharacterList";
import EpisodeList from "@/components/EpisodeList/EpisodeList";
import { Check, ChevronLeft, Heart, Star } from "@/icons";
import Link from "next/link";

/**
 * Renders the anime page view.
 *
 * @returns {JSX.Element}
 */
const AnimePage = (): JSX.Element => {
  return (
    <>
      <h1 className="text-center font-extrabold text-3xl mb-5">Cowboy Bebop</h1>

      <div className="mb-3">
        <Link className="inline-flex items-center" href="/" title="Go back">
          <ChevronLeft /> Back
        </Link>
      </div>

      <div className="flex gap-7 flex-col md:flex-row">
        <div className="flex flex-none flex-col gap-y-2">
          <img
            className="h-80 object-contain object-left"
            src="https://media.kitsu.io/anime/poster_images/1/large.jpg"
            alt="Cowboy Bebop"
          />

          <div className="flex">
            <button>
              <Star />
            </button>
            95.23 from 1000 users
          </div>

          <div className="flex">
            <button>
              <Heart />
            </button>
            500 <span className="ml-5">Rank #5</span>
          </div>

          <p>Rated R: 17+ (violence and profanity)</p>
          <p>Aired on 1999-04-03</p>
          <p>Ongoing or Ended on 1998-04-03</p>
          <p>Type: Movie</p>
        </div>

        <div className="flex flex-1 flex-col gap-y-7">
          <p>
            In the year 2071, humanity has colonized several of the planets and
            moons of the solar system leaving the now uninhabitable surface of
            planet Earth behind. The Inter Solar System Police attempts to keep
            peace in the galaxy, aided in part by outlaw bounty hunters,
            referred to as \"Cowboys\". The ragtag team aboard the spaceship
            Bebop are two such individuals. <br />
            Mellow and carefree Spike Spiegel is balanced by his boisterous,
            pragmatic partner Jet Black as the pair makes a living chasing
            bounties and collecting rewards. Thrown off course by the addition
            of new members that they meet in their travels—Ein, a genetically
            engineered, highly intelligent Welsh Corgi; femme fatale Faye
            Valentine, an enigmatic trickster with memory loss; and the strange
            computer whiz kid Edward Wong—the crew embarks on thrilling
            adventures that unravel each member's dark and mysterious past
            little by little. <br />
            Well-balanced with high density action and light-hearted comedy,
            Cowboy Bebop is a space Western classic and an homage to the smooth
            and improvised music it is named after.
            <br />
            <br />
            (Source: MAL Rewrite)
          </p>

          <div>
            <h2 className="font-bold mb-3">Characters</h2>
            <CharacterList />
          </div>

          <div>
            <h2 className="font-bold mb-3">Episodes</h2>
            <EpisodeList />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimePage;
