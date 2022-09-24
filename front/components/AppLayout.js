import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import { useState } from "react";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import create from "@ant-design/icons/lib/components/IconFont";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

// antd고유의 css문제를 덮어씌워서 해결
const Global = createGlobalStyle`
  .ant-row{
    margin-right:0 !important;
    margin-left:0 !important;
  }

  .ant-col:first-child{
    padding-left: 0 !important
  }

  .ant-col:last-child{
    padding-right: 0 !import;
  }
`;

function AppLayout({ children }) {
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <Global />
      <Menu
        mode="horizontal"
        items={[
          {
            label: (
              <Link href="/">
                <a>노드버드</a>
              </Link>
            ),
            key: "/",
          },
          {
            label: (
              <Link href="/profile">
                <a>프로필</a>
              </Link>
            ),
            key: "/profile",
          },
          {
            label: <SearchInput enterButton />,
          },
          {
            label: (
              <Link href="/signup">
                <a>회원가입</a>
              </Link>
            ),
            key: "/signup",
          },
        ]}
      />
      {/* 반응형 지원  Row, Col*/}
      {/* gutter는 컬럼사이의 간격조정 */}
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://naver.com" target="_blank" rel="noreferrer noopener">
            Naver
          </a>
        </Col>
      </Row>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
