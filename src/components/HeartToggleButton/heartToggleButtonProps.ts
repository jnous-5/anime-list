export default interface HeartToggleButton {
  /**
   * `true` when button is active. `false` otherwise.
   */
  active?: boolean;
  /**
   * Callback called whenever the button is toggled.
   */
  onToggle?: () => void;
}
