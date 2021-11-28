import http from '../../http_common';
import { Dispatch } from "react";
import { IUserItem, UserAction, UserActionTypes } from "./list/types";
import { IUserCreate, AddUserAction, UserCreateActionTypes } from "./create/types";

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

  export const createUser = (model: IUserCreate) => {
    return async (dispatch: Dispatch<AddUserAction>) => {
      try {
        dispatch({ type: UserCreateActionTypes.CREATE_USER });

        const response = await http.post<IUserItem>("api/users/create", model);

        dispatch({
          type: UserCreateActionTypes.CREATE_USER_SUCCESS,
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: UserCreateActionTypes.CREATE_USER_ERROR,
          payload: "Error",
        });
      }
    };
  };