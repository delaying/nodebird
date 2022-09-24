import Link from "next/link";
import PropTypes from "prop-types";

// 해시태그 누르면 링크로 이동하는 컴포넌트
function PostCardContent({ postData }) {
  return (
    <div>
      <></>
      {postData.split(/(#[^\s#]+)/g).map((v, i) => {
        if (v.match(/(#[^\s#]+)/g)) {
          return (
            <Link href={`/hashtag/${v.slice(1)}`} key={i}>
              <a>{v}</a>
            </Link>
          );
        }
        return v;
      })}
    </div>
  );
}

PostCardContent.propTypes = { postData: PropTypes.string.isRequired };

export default PostCardContent;
