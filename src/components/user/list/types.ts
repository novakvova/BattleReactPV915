export interface IUserItem {
    id: number,
    fio: string,
    email: string,
    image: string
}

export interface IUserCreate {
    fio: string,
    photo: Blob,
    email: string,
    password: string,
    confirmPassword: string
}

export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",

    CREATE_USER = "CREATE_USER",
    CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
    CREATE_USER_ERROR = "CREATE_USER_ERROR",
}

export interface UserState {
    users: null|Array<IUserItem>,
    loading: boolean,
    error: null|string
}

export interface UserFetchAction {
    type: UserActionTypes.FETCH_USERS
}

export interface UserFetchSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS,
    payload: Array<IUserItem>
}

export interface UserFetchErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR,
    payload: string
}


export type UserAction = UserFetchAction| UserFetchSuccessAction | UserFetchErrorAction;

