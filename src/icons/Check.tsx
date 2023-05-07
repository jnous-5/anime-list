import { IconProps } from ".";

/**
 * Renders a check svg icon.
 *
 * @returns {JSX.Element}
 */
const Check = ({
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
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};

export default Check;
