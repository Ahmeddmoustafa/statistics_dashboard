import { ReactNode } from "react";
import {
  HiChartPie,
  HiShoppingBag,
  HiShoppingCart,
  HiUser,
} from "react-icons/hi";

export interface StatisticsCardModel {
  icon: ReactNode;
  title: string;
  sales: string;
  additionalSales: string;
}

export const StatisticsList: StatisticsCardModel[] = [
  {
    icon: <HiShoppingBag className="text-blue-500" />,
    title: "Total Sales",
    sales: "433565",
    additionalSales: "",
  },
  {
    icon: <HiChartPie className="text-red-500" />,
    title: "Total Expenses",
    sales: "2343",
    additionalSales: "",
  },
  {
    icon: <HiUser className="text-yellow-500" />,
    title: "Total Customers",
    sales: "1233",
    additionalSales: "",
  },
  {
    icon: <HiShoppingCart className="text-green-500" />,
    title: "Total Orders",
    sales: "23423",
    additionalSales: "",
  },
];
