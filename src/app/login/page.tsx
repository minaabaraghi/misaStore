"use client";
import React from "react";
import { TailwindButton } from "../../components/ui/tailwindButton";
import { TailwindInput } from "@/components/ui/tailwindInput";
import { LoginComponent } from "../components/loginComponent";

export interface IUser {
  name: string;
  password: string;
}
export default function Login() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  async function getData() {
    await LoginComponent({ name, password });
  }
  function onchangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function onchangePass(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  const handleLogin = () => {
    getData();
  };

  return (
    <div className="flex flex-col mx-auto w-lg p-4 mt-4 gap-3 bg-gray-50 rtl h-96 rounded-lg items-center border-gray-100 border-2 justify-center">
      <h1 className="text-2xl font-bold mb-5">ورود به حساب کاربری</h1>
      <TailwindInput
        type="text"
        placeholder="نام کاربری"
        className="input"
        value={name}
        defaultValue=""
        name="username"
        autocomplete="off"
        onChange={onchangeName}
      />
      <TailwindInput
        type="password"
        placeholder="پسورد"
        className="input"
        value={password}
        defaultValue=""
        name="password"
        autocomplete="off"
        onChange={onchangePass}
      />
      <TailwindButton
        type="submit"
        className="submitButton"
        onClick={handleLogin}
      >
        ورود
      </TailwindButton>
    </div>
  );
}
