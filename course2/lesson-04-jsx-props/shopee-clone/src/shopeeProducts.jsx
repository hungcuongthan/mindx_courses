// products.js
// Import the image
import iphoneX from "./assets/iphone-x.jpg";
import iphone11 from "./assets/iphone-11.jpg";
import iphone12 from "./assets/iphone-12.jpg";

const products = [
  {
    id: 1,
    image: iphoneX,
    title: "Iphone X",
    rating: 5,
    price: "10,000,000 VND",
    sold: 100,
  },
  {
    id: 2,
    image: iphone11,
    title: "Iphone 11",
    rating: 4,
    price: "11,000,000 VND",
    sold: 150,
  },
  {
    id: 3,
    image: iphone12,
    title: "Iphone 12",
    rating: 4,
    price: "12,000,000 VND",
    sold: 1500,
  },
];

export default products;
