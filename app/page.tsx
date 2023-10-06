import { AdvantagesDivider, Banner, TextDivider } from "@/components/atoms";
import {
  Contacts,
  ItemMenu,
  MainContentSlider,
  ItemList,
  Products,
  Rating,
  ReserveTable,
  BlogMenu,
} from "@/components/organisms";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <MainContentSlider />
      <AdvantagesDivider data={dividerText} />
      <Products />
      <Banner text={bannerData.text} img={bannerData.img} />
      <Rating />
      {/* <Contacts /> */}
      <TextDivider text={"the coffee that's right for you"} />
      <ItemList data={coffeData} />
      <ItemMenu />
      <ReserveTable />
      <TextDivider text={"Our awesome team"} />
      <ItemList data={teamData} />
      <BlogMenu />
    </React.Fragment>
  );
}

const dividerText = [
  {
    id: 1,
    text: "Fairtrade",
  },
  {
    id: 2,
    text: "Organic",
  },
  {
    id: 3,
    text: "Climate neutral",
  },
];

const bannerData = {
  text: "More tnah just a coffe shop",
  img: "/images/more-coffe-image.png",
};

const coffeData = [
  {
    id: 1,
    img: "/images/product-3.png",
    name: "French Roast",
    price: "$37.00",
    text: "",
    label: false,
  },
  {
    id: 2,
    img: "/images/product-4.png",
    name: "Decaf Espresso",
    price: "$41.00",
    text: "New",
    label: true,
  },
  {
    id: 3,
    img: "/images/product-5.png",
    name: "Costa Rica",
    price: "$36.00",
    text: "",
    label: false,
  },
  {
    id: 4,
    img: "/images/product-6.png",
    name: "Decaf French Roast Santa",
    price: "$45.00",
    text: "Sold",
    label: true,
  },
];

const teamData = [
  {
    id: 1,
    img: "/images/team-5.png",
    name: "Tom Splinder",
    price: "Manager",
    text: "",
    label: false,
  },
  {
    id: 2,
    img: "/images/team-2.png",
    name: "Jonas Hanks",
    price: "Manager",
    text: "",
    label: false,
  },
  {
    id: 3,
    img: "/images/team-3.png",
    name: "Laura Simons",
    price: "Pastry Chef",
    text: "",
    label: false,
  },
  {
    id: 4,
    img: "/images/team-4.png",
    name: "Media manager",
    price: "Chef",
    text: "",
    label: false,
  },
  {
    id: 5,
    img: "/images/team-1.png",
    name: "Uma Clark",
    price: "$37.00",
    text: "",
    label: false,
  },
  {
    id: 6,
    img: "/images/team-6.png",
    name: "Rita Flams",
    price: "Sales person",
    text: "",
    label: false,
  },
];
