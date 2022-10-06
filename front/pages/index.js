import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import AppLayout from "../components/AppLayout";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );
  //인피니티 스크롤링 코드
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasMorePosts && !loadPostsLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_POSTS_REQUEST,
        lastId,
      });
    }
  }, [inView, hasMorePosts, loadPostsLoading, mainPosts]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div
        ref={hasMorePosts && !loadPostsLoading ? ref : undefined}
        style={{ height: 10 }}
      />
    </AppLayout>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req }) => {
//       const cookie = req ? req.headers.cookie : "";
//       axios.defaults.headers.Cookie = "";
//       if (req && cookie) {
//         axios.defaults.headers.Cookie = cookie;
//       }
//       store.dispatch({
//         type: LOAD_MY_INFO_REQUEST,
//       });
//       store.dispatch({
//         type: LOAD_POSTS_REQUEST,
//       });
//       store.dispatch(END);
//       await store.sagaTask.toPromise();
//     }
// );

export default Home;
