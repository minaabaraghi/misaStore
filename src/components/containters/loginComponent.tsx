import React from "react";
import Cookie from "js-cookie";
import { redirect } from "next/navigation";
import { IUser } from "@/app/login/page";

export async function LoginComponent({ name, password }: IUser) {
  const result = await fetch(`http://localhost:3005/users`);
  const data = (await result.json()) as IUser[];
  const response = {
    token: "sdhafjasdfgajshdgf",
    expire: 7,
  };
  Cookie.set("token", response.token, { expires: response.expire });
  const user = data?.find(
    (user: { name: string; password: string }) =>
      user.name === name && user.password === password
  );
  if (user) {
    localStorage.setItem("username", name);
    redirect("/");
  } else {
    alert("نام کاربری یا رمز عبور اشتباه است");
  }
  return <></>;
}
