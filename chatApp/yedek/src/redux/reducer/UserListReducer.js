import {GET_USERS} from '../action/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {...state, usersData: action.payload};
    default:
      return state;
  }
};
