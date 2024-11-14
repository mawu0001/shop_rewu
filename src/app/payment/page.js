"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState("0.00");

  useEffect(() => {
    const cartParam = searchParams.get("cart");
    const totalParam = searchParams.get("total");

    if (cartParam) {
      try {
        const parsedCart = JSON.parse(cartParam);
        setCartItems(parsedCart);
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }

    if (totalParam) {
      setTotal(totalParam);
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
                {item.image && item.image !== "" && (
                  <div className="relative w-16 h-16 flex-shrink-0">
                    {/* <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className=""
                      sizes="(max-width: 64px) 100vw, 64px"
                    /> */}
                  </div>
                )}
                <div className="flex-grow">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-saddle900 dark:text-saddle50 stroke-saddle900 border w-fit rounded-3xl px-8 py-1.5 ">
                    {item.count}
                  </p>
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
