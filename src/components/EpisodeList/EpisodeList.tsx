import { Check } from "@/icons";

/**
 * Renders a list of anime episodes.
 *
 * @param {EpisodeListProps} props
 * @returns {JSX.Element}
 */
const EpisodeList = (): JSX.Element => {
  return (
    <ul>
      <li className="flex">
        <button>
          <Check stroke="#019e10" />
        </button>
        <span className="ml-2 mr-5">1998-04-03</span>
        <span>1. Title or synopsis if any</span>
      </li>

      <li className="flex">
        <button>
          <Check stroke="#019e10" />
        </button>
        <span className="ml-2 mr-5">1998-04-03</span>
        <span>2. Title or synopsis if any</span>
      </li>

      <li className="flex">
        <button>
          <Check />
        </button>
        <span className="ml-2 mr-5">1998-04-03</span>
        <span>3. Title or synopsis if any</span>
      </li>

      <li className="flex">
        <button>
          <Check />
        </button>
        <span className="ml-2 mr-5">1998-04-03</span>
        <span>4. Title or synopsis if any</span>
      </li>

      <li className="flex">
        <button>
          <Check />
        </button>
        <span className="ml-2 mr-5">1998-04-03</span>
        <span>5. Title or synopsis if any</span>
      </li>
    </ul>
  );
};

export default EpisodeList;
