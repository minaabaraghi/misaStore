"use client";
import React, { useEffect, useState } from "react";
import { useActionState } from "react";
import { toast } from "react-toastify";
import { SubmitUser } from "@/lib/actions/login/submitUser";
import { loginService } from "@/services/loginServices/loginService";
import { TailwindInput } from "@/components/ui/tailwindInput";
import { TailwindButton } from "@/components/ui/tailwindButton";
import { registerService } from "@/services/loginServices/registerService";

const InitialState = {
  zodErrors: null,
  strapiErrors: null,
  data: { userName: "", password: "" },
  message: null,
};

export default function LoginForm() {
  const [formState, formAction] = useActionState(SubmitUser, InitialState);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (name && password) {
      await loginService({ name, password });
    }
  };

  const handleCreateAccount = async () => {
    if (name && password) {
      try {
        await registerService({ name, password });
        alert("حساب کاربری شما با موفقیت ایجاد شد");
      } catch {
        alert("خطا در ثبت‌ نام");
      }
    }
  };

  useEffect(() => {
    if (formState?.message) toast.success(formState.message);
  }, [formState?.message]);

  return (
    <form action={formAction}>
      <div className="flex flex-col mx-auto w-lg p-4 mt-4 gap-3 bg-gray-50 rtl h-96 rounded-lg items-center border-gray-100 border-2 justify-center">
        <h2 className="text-2xl font-bold mb-5">ورود به حساب</h2>

        <TailwindInput
          name="userName"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام کاربری"
        />
        {formState?.zodErrors?.userName && (
          <p className="text-sm text-red-500">
            {formState.zodErrors.userName[0]}
          </p>
        )}

        <TailwindInput
          name="password"
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز عبور"
        />
        {formState?.zodErrors?.password && (
          <p className="text-sm text-red-500">
            {formState.zodErrors.password[0]}
          </p>
        )}

        <TailwindButton
          type="submit"
          className="submitButton"
          onClick={handleLogin}
        >
          ورود
        </TailwindButton>
        <TailwindButton
          type="submit"
          className="createButton"
          onClick={handleCreateAccount}
        >
          عضویت
        </TailwindButton>
      </div>
    </form>
  );
}
