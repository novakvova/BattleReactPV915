import { UserAction, UserActionTypes, UserState } from "./list/types";
import { AddUserAction, UserCreateActionTypes } from "./create/types";

const initialState: UserState = {
  users: null,
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction | AddUserAction
): UserState => {
  switch (action.type) {
    case UserCreateActionTypes.CREATE_USER: 
    case UserActionTypes.FETCH_USERS: {
      return {
        ...state,
        loading: true,
      };
    }
    case UserActionTypes.FETCH_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    }
    case UserCreateActionTypes.CREATE_USER_ERROR:
    case UserActionTypes.FETCH_USERS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    case UserCreateActionTypes.CREATE_USER_SUCCESS: {
      return {
        ...state,
        loading:false,
        
      }
    }

    default:
      return state;
  }
};
