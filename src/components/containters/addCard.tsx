"use client";
import React from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useShoppingCartContext } from "@/context/shoppingCartContext";

interface IAddToCartProps {
  id: string;
}

export function AddCard({ id }: IAddToCartProps) {
  const { handleIncreaseProduct, handleDecreaseProduct, getProductQty } =
    useShoppingCartContext();
  return (
    <div className="flex flex-row gap-5 justify-center items-center mt-4 border-2 border-gray-300 rounded p-1.5">
      <button
        className="bg-red-600 rounded text-white w-8 h-8 text-3xl flex items-center justify-center"
        onClick={() => handleIncreaseProduct(parseInt(id))}
      >
        <span className="mb-1 text-white">+</span>
      </button>
      <span className="mx-4">{getProductQty(parseInt(id))}</span>

      {getProductQty(parseInt(id)) == 0 ? (
        ""
      ) : getProductQty(parseInt(id)) == 1 ? (
        <button className="w-8 h-8 text-gray-500">
          <DeleteOutlineOutlinedIcon />
        </button>
      ) : (
        <button
          className="bg-red-600 rounded text-white w-8 h-8 text-3xl flex items-center justify-center"
          onClick={() => handleDecreaseProduct(parseInt(id))}
        >
          <span className="mb-1 text-white">-</span>
        </button>
      )}
    </div>
  );
}
