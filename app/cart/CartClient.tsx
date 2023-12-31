"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "@/utils/formatPrice";

const CartClient = () => {
  const { cartProducts, cartTotalAmount, handleClearCart } = useCart();
  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex flex-col items-center">
        <div className="text-2xl">Your cart is empty</div>
        <div>
          <Link
            href="/"
            className="flex items-center gap-1 mt-2 text-slate-500"
          >
            <MdArrowBack />
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Heading title="SHOPPING CART" center />
      <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            return <ItemContent key={item.id} item={item} />;
          })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div className="w-[100px]">
          <Button
            label="Clear Cart"
            onClick={() => handleClearCart()}
            small
            outline
          />
        </div>
        <div className="text-sm flex flex-col gap-1 items-start">
          <div className="flex justify-between text-base font-semibold w-full">
            <span>SUBTOTAL</span>
            <span>{formatPrice(cartTotalAmount)}</span>
          </div>
          <p className="text-slate-500">
            Taxes and shipping calculate at checkout
          </p>
          <Button label="CHECKOUT" onClick={() => {}} />
          <Link
            href="/"
            className="flex items-center gap-1 mt-2 text-slate-500"
          >
            <MdArrowBack />
            <span>Coutinue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
