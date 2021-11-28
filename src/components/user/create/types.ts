import { IUserItem } from "../list/types";

export interface IUserCreate {
    fio: string,
    photo: Blob,
    email: string,
    password: string,
    confirmPassword: string
}

export enum UserCreateActionTypes {

    CREATE_USER = "CREATE_USER",
    CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
    CREATE_USER_ERROR = "CREATE_USER_ERROR",
}

export interface UserCreateAction {
    type: UserCreateActionTypes.CREATE_USER
}

export interface UserCreateSuccessAction {
    type: UserCreateActionTypes.CREATE_USER_SUCCESS,
    payload: IUserItem
}

export interface UserCreateErrorAction {
    type: UserCreateActionTypes.CREATE_USER_ERROR,
    payload: string
}


export type AddUserAction = UserCreateAction | UserCreateSuccessAction | UserCreateErrorAction;

