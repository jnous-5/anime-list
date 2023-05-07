import { Check } from "@/icons";
import { EpisodeListProps } from ".";

/**
 * Renders a list of anime episodes.
 *
 * @param {EpisodeListProps} props
 * @returns {JSX.Element}
 */
const EpisodeList = ({ data }: EpisodeListProps): JSX.Element => {
  if (data.length === 0) {
    return <p>No information.</p>;
  }

  return (
    <ul>
      {data.map((episode, index) => (
        <li className="flex">
          <button>
            <Check stroke="#019e10" />
          </button>
          <span className="ml-2 mr-5">{episode.airDate}</span>
          <span className="mr-1">{index + 1}.</span>
          <span>{episode.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default EpisodeList;
