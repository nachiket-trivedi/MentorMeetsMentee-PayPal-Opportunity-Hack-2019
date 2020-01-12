import { LOGIN, SIGNUP,UPDATECUST,UPDATEREST } from "../redux-files/constants";
export function myMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === LOGIN) {
        console.log(
          "Me aa gaya-login"
        )
      }
      else if (action.type === SIGNUP) {
        console.log(
          "Me aa gaya-signup"
        )
      }
      else if (action.type === UPDATECUST) {
        console.log(
          "Me aa gaya-updatecust"
        )
      }
      return next(action);
    };
  };
}
