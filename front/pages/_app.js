//페이지들의 공통적인것 처리가능
import PropTypes from "prop-types";
import "antd/dist/antd.css";
{
  /* <head></head> 내부 정보 바꾸고싶을 때 사용 */
}
import Head from "next/head";
import wrapper from "../store/configureStore";

function NodeBird({ Component }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
}

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export function reportWebVitals(metric) {
  console.log(metric);
}

export default wrapper.withRedux(NodeBird);
