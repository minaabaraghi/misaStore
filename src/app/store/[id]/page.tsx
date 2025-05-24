import React from "react";
import { ChooseColor } from "../../../components/containters/chooseColor";
import { AddCard } from "@/components/containters/addCard";
import Link from "next/link";
import Image from "next/image";

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

export default async function Store({ params }: IProductParams) {
  const { id } = await params;
  const result = await fetch(`http://localhost:3005/products/${id}`);
  const data = (await result.json()) as IProduct;

  return (
    <>
      <div
        className="grid grid-cols-12 rtl min-h-96 pl-20 pr-20 gap-4"
        style={{ height: "60vh" }}
      >
        <div className="col-span-4 items-center w-9/12 h-full border-gray-100 border-2 content-center ">
          <Link key={id} href={`photos/${id}`}>
            <Image
              width={384}
              height={512}
              src={data.imageUrl!}
              alt={data.name!}
              className="w-96 h-auto justify-self-center"
            />
          </Link>
        </div>
        <div className="col-span-6 content-center">
          <h1 className="text-2xl font-bold mb-5">{data.name}</h1>
          <p className="text-lg">{data.description}</p>
          <ChooseColor />
          <h1 className="text-lg font-bold mt-4 mb-4">مشخصات کالا</h1>
          <h1>
            {Object.entries(data.specifications).map(([key, value], index) => {
              return (
                <div key={index} className="flex flex-row gap-2">
                  <span className="text-lg text-gray-500">{key}:</span>
                  <span className="text-lg">{value}</span>
                </div>
              );
            })}
          </h1>
        </div>
        <div className="col-span-2 bg-gray-50 border-gray-100 border-2 rounded-lg shadow-lg  text-center p-4 ">
          <div className="inline-block min-w-full mt-16  mb-8">
            <div className="pb-14">
              <span className="float-right">قیمت پایه</span>
              <span className="float-left text-xl ">
                {data.price?.toLocaleString()} تومان
              </span>
            </div>
            <div className="pb-14">
              <span className="float-right">جمع کل</span>
              <span className="float-left text-xl ">
                {data.price?.toLocaleString()} تومان
              </span>
            </div>
          </div>
          <div className="justify-items-center">
            <AddCard id={id} />
          </div>
          <div className="flex flex-row gap-2 justify-center mt-30 ">
            <button className="bg-red-600 text-white rounded px-4 py-2 min-w-full">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
