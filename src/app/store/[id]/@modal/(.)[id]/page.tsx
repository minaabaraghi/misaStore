import React from "react";
import Image from "next/image";
import { Modal } from "@mui/material";

interface IProductParams {
  params: Promise<{ id: string }>;
  searchParams: Promise<object>;
}

interface IProduct {
  id: number | null;
  name: string | null;
  price: number | null;
  description: string | null;
  imageUrl: string | null;
  specifications: string[];
}

export default async function PhotoModal({ params }: IProductParams) {
  const { id } = await params;
  const result = await fetch(`http://localhost:3005/products/${id}`);
  const data = (await result.json()) as IProduct;

  return (
    <Modal open={true}>
      <div className="flex flex-col items-center justify-center h-screen">
        {data?.imageUrl ? (
          <Image
            src={data.imageUrl}
            alt={data.name || "Product Image"}
            width={384}
            height={512}
            layout="intrinsic"
            className="w-96 h-auto justify-self-center"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </Modal>
  );
}
