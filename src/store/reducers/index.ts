
import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { userReducer } from "../../components/user/user.reducer";

import { History } from "history";
import { RouterState, connectRouter } from "connected-react-router";
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory();

export const createRootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  router: connectRouter(history),
});

export interface State {
  router: RouterState;
}

export type RootState = ReturnType<typeof createRootReducer>;
