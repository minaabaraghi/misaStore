import React from "react";
import Image from "next/image";

interface IProduct {
  id: number | null;
  name: string | null;
  price: number | null;
  description: string | null;
  imageUrl: string | null;
  specifications: string[];
}

export default async function Photos({ params }: { params: { id: string } }) {
  const { id } = await params;
  const result = await fetch(`http://localhost:3005/products/${id}`);
  const products = (await result.json()) as unknown;
  const data = products as IProduct;

  return (
    <>
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
    </>
  );
}
