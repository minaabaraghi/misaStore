import React from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  defaultValue?: string;
  name?: string;
  autocomplete?: string;
}
export function TailwindInput({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  defaultValue,
  name,
  autocomplete = "off",
}: InputProps) {
  return (
    <>
      <input
        autoComplete={autocomplete}
        type={type}
        placeholder={placeholder}
        value={value !== undefined ? value : ""}
        onChange={onChange}
        readOnly={value !== undefined && !onChange}
        className={className}
        defaultValue={value === undefined ? defaultValue || "" : undefined}
        style={{ paddingRight: "10px" }}
        name={name}
      />
    </>
  );
}
