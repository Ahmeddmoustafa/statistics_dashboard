import React from "react";
import { Link } from "react-router-dom";
import { StatisticsList } from "../../lib/constants/statistic_sales";
import StatisticsCard from "./components/statistics_card";
import Graph from "./components/graph";
import BuyerProfilePieChart from "./components/buyer_pie_chart";
import Products from "./components/products";
import Recentorders from "./components/recent_orders";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 p-8">
        {StatisticsList.map((card) => (
          <StatisticsCard
            icon={card.icon}
            title={card.title}
            sales={card.sales}
            additionalSales={card.additionalSales}
          ></StatisticsCard>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-8 pb-8">
        <Graph></Graph>
        <div className="col-span-1 ">
          <BuyerProfilePieChart></BuyerProfilePieChart>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-8">
        <Recentorders></Recentorders>
        <div className="col-span-1">
          <Products></Products>
        </div>
      </div>
    </div>
  );
}
