// 서버사이드렌더링을 위함
import { HYDRATE } from "next-redux-wrapper";
// 리듀서 합쳐주는 메서드
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

// (이전상태,액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  user,
  post,
});
export default rootReducer;
