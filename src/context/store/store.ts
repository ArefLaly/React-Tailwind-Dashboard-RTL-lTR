import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./../slice/auth.slice";
// For Combine MultiReducer use this confing
// const appReducer = combineReducers({
//   auth: authReducer,

// });
// const rootReducer = (
//   state: ReturnType<typeof appReducer>,
//   action: AnyAction
// ) => {
//   /* if you are using RTK, you can import your action and use it's type property instead of the literal definition of the action  */
//   if (action.type == "auth/logout") {
//     return appReducer(undefined, { type: undefined });
//   }
//   return appReducer(state, action);
// };
// export const store = configureStore({
//   reducer: rootReducer,
// });
export const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
