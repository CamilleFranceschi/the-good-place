import {FETCH_PLACES} from '../actions/index';

export default function(state = [], action) {
  console.log('action', action);
  switch (action.type) {
    case FETCH_PLACES:
      return action.payload.data;
      // return [ action.payload.data, ...state ];
      // console.log('fetc', action.payload.data);
    // return [{name:"ko"}];
      // return action.payload.data ? action.payload.data : [];
    //   return [ action.payload.data, ...state ];
    // }
      
  }
  return state;
}

// https://stackoverflow.com/questions/34003553/redux-what-is-the-correct-way-to-filter-a-data-array-in-reducer