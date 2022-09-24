import styled, { createGlobalStyle } from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

export const Overlay = styled.div`
  positin: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

// 함수호출 문법은 2가지임. func() 또는 func`` 그러므로 styled.div라는 함수를 호출하는 개념 : 태그드 템플릿 리터럴

// & h1과 &button은 Header안의 h1과 버튼에만 적용됨
export const Header = styled.header`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;

  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;

export const CloseBtn = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 140px;
  cursor: pointer;
`;

export const SlickWrapper = styled.div`
  height: calc(100%-44px);
  background: #090909;
`;

export const ImgWrapper = styled.div`
  padding: 32px;
  text-align: center;

  &img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

export const Indicator = styled.div`
  text-align: center;

  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

// 이미 스타일 지정된 클래스의 스타일 바꾸기 .
// 아래처럼 설정하고 코드내부에 아무곳이나 삽입해주면됨.
export const Global = createGlobalStyle`
.slick-slide{
  display:inline-block;
}

.ant-card-cover{
  transform:none !important;
}
`;
