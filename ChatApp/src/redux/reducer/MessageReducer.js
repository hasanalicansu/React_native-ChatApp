import {GET_MESSAGE, SEND_MESSAGE, GET_UID} from '../action/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return {...state, getMessage: action.payload};
    case SEND_MESSAGE:
      return {...state, sendMessage: action.payload};
    case GET_UID:
      return {...state, Uid: action.payload};
    default:
      return state;
  }
};
