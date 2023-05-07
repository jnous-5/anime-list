/**
 * Returns a hash map for a list of watched anime episode found in localStorage.
 *
 * @returns {Map<string, Array<string>>}
 */
const getWatchedEpisodesMap = (): Map<string, Array<string>> => {
  const watched = localStorage.getItem("watched");
  return watched
    ? new Map<string, Array<string>>(Object.entries(JSON.parse(watched)))
    : new Map<string, Array<string>>();
};

export default getWatchedEpisodesMap;
