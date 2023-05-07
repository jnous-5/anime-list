import { IconProps } from ".";

/**
 * Renders a chevron left svg icon.
 *
 * @returns {JSX.Element}
 */
const ChevronLeft = ({
  fill = "none",
  stroke = "currentColor",
}: IconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={stroke}
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
};

export default ChevronLeft;
