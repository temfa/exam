import Book from "@/svgs/book";
import Bookreader from "@/svgs/bookReader";
import Growth from "@/svgs/growth";

export const navbarLinks = [
  {
    title: "Home",
    dropdown: false,
    link: "/",
  },
  {
    title: "Shop",
    dropdown: true,
    link: "#",
  },
  {
    title: "About",
    dropdown: false,
    link: "/about",
  },
  {
    title: "Blog",
    dropdown: false,
    link: "/blog",
  },
  {
    title: "Contact",
    dropdown: false,
    link: "/contact",
  },
  {
    title: "Pages",
    dropdown: false,
    link: "/pages",
  },
];

export const footerLinks = [
  {
    title: "Company Info",
    subItems: [
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Carrier",
        link: "/carrier",
      },
      {
        title: "We are hiring",
        link: "/hire",
      },
      {
        title: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    title: "Legal",
    subItems: [
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Carrier",
        link: "/carrier",
      },
      {
        title: "We are hiring",
        link: "/hire",
      },
      {
        title: "Blog",
        link: "/blog",
      },
    ],
  },
  {
    title: "Features",
    subItems: [
      {
        title: "Business Marketing",
        link: "/about",
      },
      {
        title: "User Analytic",
        link: "/carrier",
      },
      {
        title: "Live Chat",
        link: "/hire",
      },
      {
        title: "Unlimited Support",
        link: "/blog",
      },
    ],
  },
  {
    title: "Resources",
    subItems: [
      {
        title: "IOS & Android",
        link: "/about",
      },
      {
        title: "Watch a Demo",
        link: "/carrier",
      },
      {
        title: "Customers",
        link: "/hire",
      },
      {
        title: "API",
        link: "/blog",
      },
    ],
  },
];

export const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const services = [
  {
    icon: <Bookreader />,
    title: "Easy Wins",
    text: "Get your best looking smile now!",
  },
  {
    icon: <Book />,
    title: "Concrete",
    text: "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    icon: <Growth />,
    title: "Hack Growth",
    text: "Overcame any hurdle or any other problem.",
  },
];

export const galleryItem = [
  { link: "/images/furniture1.png", width: 451, height: 616 },
  { link: "/images/furniture2.png", width: 678, height: 300 },
  { link: "/images/furniture3.png", width: 331, height: 300 },
  { link: "/images/furniture4.png", width: 331, height: 300 },
];

export const posts = ["/images/posts1.png", "/images/posts2.png", "/images/posts3.png"];
export const testi = [
  "/images/testi1.png",
  "/images/testi2.png",
  "/images/testi3.png",
  "/images/testi4.png",
  "/images/testi5.png",
  "/images/testi6.png",
  "/images/testi7.png",
  "/images/testi8.png",
  "/images/testi9.png",
];

export const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"];

interface SampleBody {
  id: string;
  title: string;
  price: number;
  img: string;
  count: number;
  brand: string;
  stock: number;
  category: string;
}

export default SampleBody;
