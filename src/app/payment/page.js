"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

function PaymentContent() {
  const searchParams = useSearchParams();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState("0.00");

  useEffect(() => {
    const cartIdsParam = searchParams.get("cartIds");

    if (cartIdsParam) {
      try {
        const cartIds = JSON.parse(cartIdsParam);
        const fetchData = async () => {
          const responses = await Promise.all(
            cartIds.map(async ({ id, count }) => {
              const res = await fetch(`https://dummyjson.com/products/${id}`);
              const product = await res.json();
              return { ...product, count };
            })
          );
          setCartItems(responses);
          const totalAmount = responses.reduce(
            (sum, item) => sum + item.price * item.count,
            0
          );
          setTotal(totalAmount.toFixed(2));
        };
        fetchData();
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }
  }, [searchParams]);

  return (
    <div className="max-w-4xl min-h-96 mx-auto p-6">
      <Link
        href="/productsGallery"
        className="inline-flex items-center text-saddle100 hover:text-gray-800 mb-8"
      >
        <RiArrowLeftLine className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid gap-8">
        <div className="bg-saddle50 dark:bg-saddle900 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                <div className="flex-grow">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm">{item.count}</p>
                </div>
                <p className="font-medium">
                  ${(item.price * item.count).toFixed(2)}
                </p>
              </div>
            ))}
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center font-semibold">
                <p>Total</p>
                <p>${total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
