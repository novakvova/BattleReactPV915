import { applyMiddleware, compose, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createRootReducer } from './reducers';
import { routerMiddleware } from 'connected-react-router'
import { history } from "./reducers";



export default function configureStore(preloadedState?: any) {
    const composeEnhancer: typeof compose =
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      createRootReducer,
      preloadedState,
      composeEnhancer(applyMiddleware(routerMiddleware(history),thunk))
    );
  
    return store;
  }


// export const store = createStore(
//     rootReducer(history),
//     {},
//     //composeWithDevTools(
//         compose(
//             applyMiddleware(
//               routerMiddleware(history), // for dispatching history actions
//               thunk
//             ),
//           )
//     //)
        
//         //applyMiddleware( routerMiddleware(history),thunk))
// );