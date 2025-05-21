// app/login/_services/loginService.ts
"use client";

import Cookie from "js-cookie";
import { redirect } from "next/navigation";

export async function loginService({
  name,
  password,
}: {
  name: string;
  password: string;
}) {
  const res = await fetch("http://localhost:3005/users");
  const users = await res.json();

  const user = users.find(
    (u: { name: string; password: string }) =>
      u.name === name && u.password === password
  );

  if (user) {
    Cookie.set("token", "sdhafjasdfgajshdgf", { expires: 7 });
    localStorage.setItem("username", name);
    redirect("/");
  } else {
    alert("نام کاربری یا رمز عبور اشتباه است");
  }
}
