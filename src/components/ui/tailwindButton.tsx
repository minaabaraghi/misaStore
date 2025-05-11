import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function TailwindButton({
  type,
  onClick,
  className,
  children,
  disabled,
  style,
}: ButtonProps) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={className}
        disabled={disabled}
        style={style}
      >
        {children}
      </button>
    </>
  );
}
