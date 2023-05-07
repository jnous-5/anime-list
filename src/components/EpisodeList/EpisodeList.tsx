import { Check } from "@/icons";
import { EpisodeListProps } from ".";

/**
 * Renders a list of anime episodes.
 *
 * @param {EpisodeListProps} props
 * @returns {JSX.Element}
 */
const EpisodeList = ({
  data,
  onToggleWatched,
}: EpisodeListProps): JSX.Element => {
  if (data.length === 0) {
    return <p>No information.</p>;
  }

  return (
    <ul>
      {data.map((episode, index) => (
        <li key={episode.id} className="flex">
          <button
            onClick={() => onToggleWatched?.(episode.id, !episode.isWatched)}
          >
            <Check stroke={episode.isWatched ? "#019e10" : "currentColor"} />
          </button>
          <span className="ml-2 mr-5">{episode.airDate}</span>
          <span className="mr-1">{index + 1}.</span>
          <span>{episode.title || "No information."}</span>
        </li>
      ))}
    </ul>
  );
};

export default EpisodeList;
