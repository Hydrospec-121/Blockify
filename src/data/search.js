// Mock search-assist data. A future search API integration replaces
// getTrendingSearches()/getRecentSearches() with real calls — the
// SearchBar component only consumes these two function shapes.
const trending = ['Standing desk', 'Mesh chair', 'Desk lamp', 'Storage shelf']

export function getTrendingSearches() {
  return trending
}

// "Recent" is mocked as a fixed list for now; a real implementation
// would read/write this from localStorage or a user profile.
export function getRecentSearches() {
  return ['Oak desk', 'Task chair']
}
