"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQuantityProps {
  cartCounter?: boolean;
  cartProduct: CartProductType;
  handleQuantityIncrease: () => void;
  handleQuantityDecrease: () => void;
}

const SetQuantity: React.FC<SetQuantityProps> = ({
  cartProduct,
  cartCounter,
  handleQuantityIncrease,
  handleQuantityDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : <div className="font-semibold">QUANTITY:</div>}
      <div className="flex gap-4 items-center text-base">
        <button
          className="border-[1.2px] border-slate-300 px-2 rounded"
          onClick={handleQuantityDecrease}
        >
          -
        </button>
        <div>{cartProduct.quantity}</div>
        <button
          className="border-[1.2px] border-slate-300 px-2 rounded"
          onClick={handleQuantityIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;
