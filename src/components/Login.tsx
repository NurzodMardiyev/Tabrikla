import { Button, Form, Input } from "antd";
import "../App.css";
import { loginData } from "../types/login";
import MaskedInput from "react-text-mask";
import logo from "../../public/images/logo.png";
import cong from "../../public/images/Tabriklaymiz!.png";
import { useState } from "react";

export default function Login() {
  const [showLogin, setShowlogin] = useState(true);

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
    <div className="bg-[#081131] w-full h-[100vh] flex ">
      <div className="container px-3 flex  flex-col ">
        <div className="flex flex-col items-center h-[40vh] justify-center">
          <div className="flex flex-col items-center">
            <img src={logo} className="w-[300px]" alt="Tabriklaymiz logo" />
            <img src={cong} alt="Tabriklaymiz" />
          </div>
        </div>
        {showLogin ? (
          <div className="flex justify-center flex-col items-center text-white font_style w-full">
            <h2 className="mb-4 text-[22px]">Kirish</h2>
            <Form onFinish={onFinish} className="w-full">
              <div className="">
                <Form.Item name="phone" label="Telefon raqamingiz" vertical>
                  <MaskedInput
                    mask={phoneMask}
                    placeholder="+998 (__) ___-__-__"
                    className="w-full focus:border-0 focus-within:border-0 focus:outline-0 py-2 tel_input"
                  />
                </Form.Item>
              </div>
              <div className="mt-4">
                <Form.Item name="password" label="Parolingiz" vertical>
                  <Input.Password
                    placeholder="****"
                    className="w-full focus:border-0 focus-within:border-0 focus:outline-0 py-2 tel_input bg-inherit"
                  />
                </Form.Item>
              </div>
              <div>
                <button className="bg-gradient-to-r from-[#FFFD86] to-[#E04781] w-full flex justify-center py-2 rounded-[4px] font_style text-white">
                  Tasdiqlash
                </button>
              </div>
            </Form>
            <div className="flex w-full justify-end mt-2">
              <button
                onClick={() => setShowlogin(false)}
                className="font_style text-blue-800"
              >
                Ro'yhatdan o'tish
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center flex-col items-center text-white font_style w-full">
            <h2 className="mb-4 text-[22px]">Ro'yhatdan o'tish</h2>
            <Form onFinish={onFinish} className="w-full">
              <div className="">
                <Form.Item name="phone" label="Telefon raqamingiz" vertical>
                  <MaskedInput
                    mask={phoneMask}
                    placeholder="+998 (__) ___-__-__"
                    className="w-full focus:border-0 focus-within:border-0 focus:outline-0 py-2 tel_input"
                  />
                </Form.Item>
              </div>
              <div className="mt-4">
                <Form.Item name="password" label="Parolingiz" vertical>
                  <Input.Password
                    placeholder="****"
                    className="w-full focus:border-0 focus-within:border-0 focus:outline-0 py-2 tel_input bg-inherit"
                  />
                </Form.Item>
              </div>
              <div className="mt-4">
                <Form.Item
                  name="repassword"
                  label="Parolni takrorlang"
                  vertical
                >
                  <Input.Password
                    placeholder="****"
                    className="w-full focus:border-0 focus-within:border-0 focus:outline-0 py-2 tel_input bg-inherit"
                  />
                </Form.Item>
              </div>
              <div>
                <button className="bg-gradient-to-r from-[#FFFD86] to-[#E04781] w-full flex justify-center py-2 rounded-[4px] font_style text-white">
                  Tasdiqlash
                </button>
              </div>
            </Form>
            <div className="flex w-full justify-end mt-2">
              <button
                onClick={() => setShowlogin(true)}
                className="font_style text-blue-800"
              >
                Kirish
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
