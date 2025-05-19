"use client";
import React from "react";

const colors = [
  {
    id: "1",
    name: "قرمز",
    hex: "#FF0000",
  },
  {
    id: "2",
    name: "سبز",
    hex: "#00FF00",
  },
  {
    id: "3",
    name: "آبی",
    hex: "#0000FF",
  },
  {
    id: "4",
    name: "زرد",
    hex: "#FFFF00",
  },
];
export function ChooseColor() {
  const [selectedColor, setSelectedColor] = React.useState("");

  const selectColor = (name: string) => {
    setSelectedColor(name);
  };
  return (
    <>
      <h1 className="text-1xl font-bold mt-5">رنگ کالا: {selectedColor}</h1>

      {colors.map((color) => (
        <div
          key={color.id}
          className={`h-9 w-9 rounded-full inline-block border-2 text-center content-center mr-2 mt-4 ${
            selectedColor === color.name
              ? "border-blue-800 border-3"
              : "border-b-gray-200"
          }`}
          style={{
            verticalAlign: "top",
            writingMode: "vertical-rl",
          }}
          onClick={() => selectColor(color.name)}
        >
          <span
            className={`h-7 w-7 inline-block border-2 rounded-full `}
            style={{
              backgroundColor: color.hex,
            }}
          ></span>
        </div>
      ))}
    </>
  );
}
