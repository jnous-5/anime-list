/**
 * Returns a hash map for a list of starred anime found in localStorage.
 *
 * @returns {Map<string, boolean>}
 */
const getStarredMap = (): Map<string, boolean> => {
  const starred = localStorage.getItem("starred");
  return starred
    ? new Map<string, boolean>(Object.entries(JSON.parse(starred)))
    : new Map<string, boolean>();
};

export default getStarredMap;
