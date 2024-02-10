const INITIAL_VALUE = {
    favorites: [],
    counter: 0
}

export default function favoritesReducer(state = INITIAL_VALUE, action) {

    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }

        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                favorites: [...state.favorites.filter((movie) => movie.id !== action.payload.id)]
            };

        case 'COUNTER':
            return {
                ...state,
                counter: action.payload
            }

        case 'CLEAR_FAVORITES':
            return {
                ...state,
                favorites: [],
            };

        default:
            return state;
    }
}
