import http from '../../http_common';
import { Dispatch } from "react";
import { IUserItem, UserAction, UserActionTypes } from "./user.types";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
      try {
        dispatch({ type: UserActionTypes.FETCH_USERS });

        const response = await http.get<Array<IUserItem>>("api/users/all");

        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error" });
      }
    };
  };