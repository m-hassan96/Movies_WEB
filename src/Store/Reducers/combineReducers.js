import { combineReducers } from 'redux';
import langReducer from './LangReducer';
import loaderReducer from './LoaderReducer';
import themeReducer from './ThemeReducer';
import favoritesReducer from './FavoritesReducer';
import searchReducer from './SearchReducer';
import movieReducer from './MoviesReducer';

export default combineReducers({
    // Add your reducers here.
    combineLang: langReducer,
    combineTheme: themeReducer,
    combineLoader: loaderReducer,
    combineFavorite: favoritesReducer,
    combineSearch: searchReducer,
    combineMovie: movieReducer
    
})