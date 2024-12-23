import React from "react";

const RevenueCard = ({ title, orderCount, amount }) => {
  return (
    <div className="rounded-md bg-white shadow-md p-4 ">
      <div className="text-gray-600">{title}?</div>
      <div className="flex justify-between">
        <div className="font-semibold text-xl">$ {amount}</div>
        {orderCount ? (
          <div className="flex underline cursor-pointer font-semibold ">
            <div className="text-blue-700"> {orderCount} order(s)</div>
            <div>
              <svg
                className="fill-blue-700 size-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RevenueCard;
