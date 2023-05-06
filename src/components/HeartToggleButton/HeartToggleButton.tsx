import { Heart } from "@/icons";
import { HeartToggleButtonProps } from ".";

/**
 * Renders a heart icon toggle button.
 *
 * @returns {JSX.Element}
 */
const HeartToggleButton = ({
  active = false,
  onToggle,
}: HeartToggleButtonProps): JSX.Element => {
  return (
    <button onClick={() => onToggle?.()}>
      <Heart
        fill={active ? "#ce2a29" : "transparent"}
        stroke={active ? "#ce2a29" : "currentColor"}
      />
    </button>
  );
};

export default HeartToggleButton;
