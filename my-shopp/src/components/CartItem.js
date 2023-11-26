import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from '../contexts/CartContext'
function CartItem({ item }) {
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext)
  const { id, title, image, price, amount } = item;


  console.log({total: parseFloat(price * amount).toFixed(2)})
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-night text-gray-500 ">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2 ">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer ">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex justify-between gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[70px] items-center h-full  text-primary font-medium border-double border-2 border-gray-200 ">
              <div onClick={() => decreaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer mx-1 h-full ">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-3 ">
                {amount}
              </div>
              <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
              <div className="flex-1 flex items-center justify-around  text-slate-400 w-12  px-16">${price}</div>
              <div className="flex-1 flex justify-end items-center text-primary font-medium w-24">
                ${parseFloat(price * amount).toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
