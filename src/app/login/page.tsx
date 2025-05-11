import React from "react";
import { TailwindButton } from "../../components/ui/tailwindButton";
import { TailwindInput } from "@/components/ui/tailwindInput";

export default function Login() {
  return (
    <div className="flex flex-col mx-auto w-lg p-4 mt-4 gap-3 bg-gray-50 rtl h-96 rounded-lg items-center border-gray-100 border-2 justify-center">
      <h1 className="text-2xl font-bold mb-5">ورود به حساب کاربری</h1>
      <TailwindInput
        type="text"
        placeholder="نام کاربری"
        className="input"
        value=""
        defaultValue=""
        name="username"
        autocomplete="off"
      />
      <TailwindInput
        type="password"
        placeholder="پسورد"
        className="input"
        value=""
        defaultValue=""
        name="password"
        autocomplete="off"
      />
      <TailwindButton type="submit" className="submitButton">
        ورود
      </TailwindButton>
    </div>
  );
}
