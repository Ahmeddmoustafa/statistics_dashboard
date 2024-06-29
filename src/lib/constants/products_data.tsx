import { ReactNode } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

export interface ProductItemModel {
  product_name: string;
  id: string;
  product_thumbnail: string;
  product_price: string;
  product_stock: number;
  icon: ReactNode;
}

export const popularProducts: ProductItemModel[] = [
  {
    id: "3432",
    product_name: 'Macbook M1 Pro 14"',
    product_thumbnail: "https://source.unsplash.com/100x100?macbook",
    product_price: "$1499.00",
    product_stock: 341,
    icon: <HiOutlineShoppingCart />,
  },
  {
    id: "7633",
    product_name: "Samsung Galaxy Buds 2",
    product_thumbnail: "https://source.unsplash.com/100x100?earbuds",
    product_price: "$399.00",
    product_stock: 24,
    icon: <HiOutlineShoppingCart />,
  },
  {
    id: "6534",
    product_name: "Asus Zenbook Pro",
    product_thumbnail: "https://source.unsplash.com/100x100?laptop",
    product_price: "$899.00",
    product_stock: 56,
    icon: <HiOutlineShoppingCart />,
  },
  {
    id: "9234",
    product_name: "LG Flex Canvas",
    product_thumbnail: "https://source.unsplash.com/100x100?smartphone",
    product_price: "$499.00",
    product_stock: 98,
    icon: <HiOutlineShoppingCart />,
  },
  {
    id: "4314",
    product_name: "Apple Magic Touchpad",
    product_thumbnail: "https://source.unsplash.com/100x100?touchpad",
    product_price: "$699.00",
    product_stock: 0,
    icon: <HiOutlineShoppingCart />,
  },
  {
    id: "4342",
    product_name: "Nothing Earbuds One",
    product_thumbnail: "https://source.unsplash.com/100x100?earphone",
    product_price: "$399.00",
    product_stock: 453,
    icon: <HiOutlineShoppingCart />,
  },
];
