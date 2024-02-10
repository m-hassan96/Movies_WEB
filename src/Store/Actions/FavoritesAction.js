
export const addToFavorites = (payload) => {
  return {
    type: 'ADD_TO_FAVORITES',
    payload
  };
};

export const removeFromFavorites = (payload) => {
  return {
    type: 'REMOVE_FROM_FAVORITES',
    payload
  };
};

export const counter = (payload) => {
  return {
    type: 'COUNTER',
    payload: payload
  }
}