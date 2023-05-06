import { MagnifyingGlass } from "@/icons";
import { SearchBarProps } from ".";

/**
 * Renders a search bar.
 *
 * @returns {JSX.Element}
 */
const SearchBar = (props: SearchBarProps): JSX.Element => {
  return (
    <div className="flex gap-x-2 items-center border-solid border border-black rounded-full overflow-hidden w-full px-3 py-1">
      <MagnifyingGlass />
      <input className="w-full outline-0" {...props} />
    </div>
  );
};

export default SearchBar;
