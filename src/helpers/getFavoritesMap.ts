/**
 * Returns a hash map for a list of favorite anime found in localStorage.
 *
 * @returns {Map<string, boolean>}
 */
const getFavoritesMap = (): Map<string, boolean> => {
  const favorites = localStorage.getItem("favorites");
  return favorites
    ? new Map<string, boolean>(Object.entries(JSON.parse(favorites)))
    : new Map<string, boolean>();
};

export default getFavoritesMap;
