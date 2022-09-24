// db에서 다른정보와 합쳐질땐 맨앞글자가 대문자가됨.
export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "delay",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAP1BMVEX///+msbegrLKfq7GjrrXi5efEy8+vub6ps7nv8fL29/istrzf4+XY3d/o6+y7w8jR1tm5wcbN09bCyc3y9PTNNlT3AAACUUlEQVR4nO3c6W6DMBBG0XpswhYIEN7/Wcu+tGnjqSrZSPdIlar8Gn0y48GBfHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/dn9mWegaLqcy4kwZuoqLKVIxgzR0HdeSGzem5h6hC7mUYgptiK0JXcmlZHNqxuahK7mS57LYaG0atV0XWxK6lCtp187GhqCxLjZmXY1E5rVmitCVXEozj2wlqal0Q2xOutBlXEF+r6oqmddXYyXrxn/zZPyQ0e0HVWpFnHNis2aIq8jHzKpW5g9F2nvoCiPUyDrcjh3NPsZZrX7K4VMnrgpdZWT68hDaktH0dyYpG8RBLcaPM33oWuPhndoYHLktiq/X4m/sLXS5sWgVsVmO3haJfZ/WlhpDyKr0T02YQFaK/cDR1zY3/87GEdJOcYnS2Da9YkMIXWtEEu/WRmc7aLxbm+Ma3XXesQlHbjv/jVS4G90R258oYqtD1xoR/97GlnCg2EkZQHaV4tQodK0RUdzJc3O1KxQ3V9zK7/xTo7sdPBTNjWPKjWZPILeN5uRoyI3rdKH4LmHgMm4WJv4D74xvryaaEWRab6ELjsRTtdyYQha5arlZzo8WmtGNx+03veKJIxbbTnHoRmc7yN4HtsQWutKo1J67Aq9fnXVe7Y1L9KvUo7053pD8xme18Zz4N/375cbs8ULvTq9ulG2bnd7myFhrLy2/XmGMuNt8OlTcH2tw0gauLmKVsSL29HJVMb2KZUsmj9/k9YvnivKa6xMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsPoElgcQiyXfWy4AAAAASUVORK5CYII=",
        },
        {
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAP1BMVEX///+msbegrLKfq7GjrrXi5efEy8+vub6ps7nv8fL29/istrzf4+XY3d/o6+y7w8jR1tm5wcbN09bCyc3y9PTNNlT3AAACUUlEQVR4nO3c6W6DMBBG0XpswhYIEN7/Wcu+tGnjqSrZSPdIlar8Gn0y48GBfHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/dn9mWegaLqcy4kwZuoqLKVIxgzR0HdeSGzem5h6hC7mUYgptiK0JXcmlZHNqxuahK7mS57LYaG0atV0XWxK6lCtp187GhqCxLjZmXY1E5rVmitCVXEozj2wlqal0Q2xOutBlXEF+r6oqmddXYyXrxn/zZPyQ0e0HVWpFnHNis2aIq8jHzKpW5g9F2nvoCiPUyDrcjh3NPsZZrX7K4VMnrgpdZWT68hDaktH0dyYpG8RBLcaPM33oWuPhndoYHLktiq/X4m/sLXS5sWgVsVmO3haJfZ/WlhpDyKr0T02YQFaK/cDR1zY3/87GEdJOcYnS2Da9YkMIXWtEEu/WRmc7aLxbm+Ma3XXesQlHbjv/jVS4G90R258oYqtD1xoR/97GlnCg2EkZQHaV4tQodK0RUdzJc3O1KxQ3V9zK7/xTo7sdPBTNjWPKjWZPILeN5uRoyI3rdKH4LmHgMm4WJv4D74xvryaaEWRab6ELjsRTtdyYQha5arlZzo8WmtGNx+03veKJIxbbTnHoRmc7yN4HtsQWutKo1J67Aq9fnXVe7Y1L9KvUo7053pD8xme18Zz4N/375cbs8ULvTq9ulG2bnd7myFhrLy2/XmGMuNt8OlTcH2tw0gauLmKVsSL29HJVMb2KZUsmj9/k9YvnivKa6xMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsPoElgcQiyXfWy4AAAAASUVORK5CYII=",
        },
        {
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAP1BMVEX///+msbegrLKfq7GjrrXi5efEy8+vub6ps7nv8fL29/istrzf4+XY3d/o6+y7w8jR1tm5wcbN09bCyc3y9PTNNlT3AAACUUlEQVR4nO3c6W6DMBBG0XpswhYIEN7/Wcu+tGnjqSrZSPdIlar8Gn0y48GBfHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/dn9mWegaLqcy4kwZuoqLKVIxgzR0HdeSGzem5h6hC7mUYgptiK0JXcmlZHNqxuahK7mS57LYaG0atV0XWxK6lCtp187GhqCxLjZmXY1E5rVmitCVXEozj2wlqal0Q2xOutBlXEF+r6oqmddXYyXrxn/zZPyQ0e0HVWpFnHNis2aIq8jHzKpW5g9F2nvoCiPUyDrcjh3NPsZZrX7K4VMnrgpdZWT68hDaktH0dyYpG8RBLcaPM33oWuPhndoYHLktiq/X4m/sLXS5sWgVsVmO3haJfZ/WlhpDyKr0T02YQFaK/cDR1zY3/87GEdJOcYnS2Da9YkMIXWtEEu/WRmc7aLxbm+Ma3XXesQlHbjv/jVS4G90R258oYqtD1xoR/97GlnCg2EkZQHaV4tQodK0RUdzJc3O1KxQ3V9zK7/xTo7sdPBTNjWPKjWZPILeN5uRoyI3rdKH4LmHgMm4WJv4D74xvryaaEWRab6ELjsRTtdyYQha5arlZzo8WmtGNx+03veKJIxbbTnHoRmc7yN4HtsQWutKo1J67Aq9fnXVe7Y1L9KvUo7053pD8xme18Zz4N/375cbs8ULvTq9ulG2bnd7myFhrLy2/XmGMuNt8OlTcH2tw0gauLmKVsSL29HJVMb2KZUsmj9/k9YvnivKa6xMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsPoElgcQiyXfWy4AAAAASUVORK5CYII=",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "우와!",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "대박!",
        },
      ],
    },
  ],
  //   이미지 경로 저장
  imagePaths: [],
  //   게시글 추가 완료되었을 때 true로 변경됨
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
};

// 이름을 그대로 상수처리 해주어야 알기쉽게 재활용가능
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "지연",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        // dummyPost를 앞에두어야 최근게시물이 맨위에 올라옴
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
