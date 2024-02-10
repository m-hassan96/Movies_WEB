const INITIAL_VALUE = {
    isLoading: false,
}

export default function loaderReducer(state = INITIAL_VALUE, action) {

    switch (action.type) {
        case "CHANGE_LOADER":
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}


