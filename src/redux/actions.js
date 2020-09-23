

export const addListing = (listing) => {
  return {
      type: 'ADD_LISTING',
      value: listing
  }
}
export const removeListing = (index) => {
  return {
      type: 'REMOVE_LISTING',
      value: index
  }
}
export const setUser = (user) => {
  return {
      type: 'SET_USER',
      value: user
  }
}