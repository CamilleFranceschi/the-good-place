import { combineReducers } from 'redux';
// import SelectedPlaceReducer from './reducer_selected_place';
import PlacesReducer from './reducer_places';
import SelectedPlaceReducer from './reducer_selected_place';

const rootReducer = combineReducers({
  places: PlacesReducer,
  selectedPlace: SelectedPlaceReducer
  // places: []
  // selectedPlace: SelectedPlaceReducer,
  // places: PlacesReducer
});

export default rootReducer;