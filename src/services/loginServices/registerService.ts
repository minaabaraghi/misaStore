// app/login/_services/registerService.ts
"use client";

export async function registerService({
  name,
  password,
}: {
  name: string;
  password: string;
}) {
  const response = await fetch("http://localhost:3005/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: Math.floor(Math.random() * 1000).toString(),
      name,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("ثبت‌نام با مشکل مواجه شد");
  }

  return await response.json();
}
