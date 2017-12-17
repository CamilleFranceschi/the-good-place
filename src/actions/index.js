import axios from 'axios';

export const PLACE_SELECTED = 'PLACE_SELECTED';
export const FETCH_PLACES = 'FETCH_PLACES';


const ROOT_URL = 'https://raw.githubusercontent.com/CamilleFranceschi/places/master';

export function selectPlace(place) {
  return {
    type: PLACE_SELECTED,
    payload: place
  }
}

export function fetchPlaces() {
  const url = `${ROOT_URL}/places.json`;
  const request = axios.get(url);
  return {
    type: FETCH_PLACES,
    payload: request
  }
}
