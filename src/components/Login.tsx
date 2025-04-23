import { Form, Input } from "antd";
import "../App.css";
import { loginData } from "../types/login";
import MaskedInput from "react-text-mask";

export default function Login() {
  const onFinish = (data: loginData) => {
    console.log(data);
  };

  const phoneMask = [
    "+",
    "9",
    "9",
    "8",
    " ",
    "(",
    /[1-9]/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
  ];
  return (
    <div>
      <div className="container mx-auto flex gap-3">
        <div>
          <Form onFinish={onFinish}>
            <div className="mt-4">
              <Form.Item name="phone" label="Telefon raqamingiz" vertical>
                <MaskedInput
                  mask={phoneMask}
                  placeholder="+998 (__) ___-__-__"
                  className="w-full outline-[0.5px] focus:border-inherit hover:border-1 py-2.5 focus focus:outline-none focus:border-none border-none bg-[#eee]  focus:ring-[0px]"
                />
              </Form.Item>
            </div>
            <div className="mt-4">
              <Form.Item name="password" label="Parolingiz." vertical>
                <Input.Password />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
