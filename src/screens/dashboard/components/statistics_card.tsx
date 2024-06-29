import React from "react";
import { StatisticsCardModel } from "../../../lib/constants/statistic_sales";

export default function StatisticsCard(card: StatisticsCardModel) {
  return (
    <div className=" col-span-1 bg-white flex items-center pl-3 overflow-hidden h-32">
      <span className="text-6xl text-gray-500 pr-3">{card.icon}</span>
      <div className="flex flex-col">
        <h1 className=" text-black text-3xl">{card.title}</h1>
        <h1 className=" text-black text-xl font-bold">{card.sales}</h1>
      </div>
    </div>
  );
}
