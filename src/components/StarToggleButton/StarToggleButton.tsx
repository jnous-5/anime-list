import { Star } from "@/icons";
import { StarToggleButtonProps } from ".";

/**
 * Renders a star icon toggle button.
 *
 * @returns {JSX.Element}
 */
const StarToggleButton = ({
  active = false,
  onToggle,
}: StarToggleButtonProps): JSX.Element => {
  return (
    <button onClick={() => onToggle?.()}>
      <Star
        fill={active ? "#fefe08" : "transparent"}
        stroke={active ? "#fefe08" : "currentColor"}
      />
    </button>
  );
};

export default StarToggleButton;
