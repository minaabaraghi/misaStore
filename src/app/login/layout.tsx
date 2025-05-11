import React from "react";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
