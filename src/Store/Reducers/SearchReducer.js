const INITIAL_VALUE = {
    search: ""
}

export default function searchReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case 'SEARCH_WORD':
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
}