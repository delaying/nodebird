import { Form, Input } from "antd";
import { useMemo } from "react";

function NicknameEditForm() {
  const style = useMemo(() => ({
    marginButtom: "20px",
    border: "1px solid #d9d9d9",
    padding: "30px",
  }));

  return (
    <Form style={style}>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
}

export default NicknameEditForm;
