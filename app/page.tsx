"use client";

import { AdvantagesDivider, Banner, TextDivider } from "@/components/atoms";
import {
  ItemMenu,
  MainContentSlider,
  ItemList,
  Products,
  Rating,
  ReserveTable,
  BlogMenu,
  CoffeMenuList,
  FollowUs,
  ScrollingEffect,
  Loader,
  GreenBlog,
} from "@/components/organisms";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      setIsLoaded(true);
    }, 5000);
  }, []);

  return isLoaded ? (
    <React.Fragment>
      <ScrollingEffect>
        <MainContentSlider />
      </ScrollingEffect>

      <ScrollingEffect>
        <AdvantagesDivider data={dividerText} />
        <Products />
      </ScrollingEffect>

      <ScrollingEffect>
        <Banner text={bannerData.text} img={bannerData.img} />
      </ScrollingEffect>

      <ScrollingEffect>
        <Rating />
      </ScrollingEffect>

      <ScrollingEffect>
        <TextDivider text={"the coffee that's right for you"} />
        <ItemList data={coffeData} />
      </ScrollingEffect>

      <ScrollingEffect>
        <ItemMenu />
        <ReserveTable />
      </ScrollingEffect>

      <ScrollingEffect>
        <TextDivider text={"Our awesome team"} />
        <ItemList data={teamData} />
      </ScrollingEffect>

      <ScrollingEffect>
        <BlogMenu />
      </ScrollingEffect>

      <ScrollingEffect>
        <GreenBlog />
      </ScrollingEffect>

      <ScrollingEffect>
        <TextDivider text={"Our trusted Supplies"} />
        <ItemList data={suppliesData} />
      </ScrollingEffect>

      <ScrollingEffect>
        <CoffeMenuList />
      </ScrollingEffect>

      <ScrollingEffect>
        <TextDivider text={"Follow us for more"} />
        <FollowUs />
      </ScrollingEffect>
    </React.Fragment>
  ) : (
    <Loader />
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
    name: "Rita Flams",
    price: "Manager",
    text: "",
    label: false,
  },
  {
    id: 2,
    img: "/images/team-2.png",
    name: "Uma Clark",
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
    name: "Jason Statham",
    price: "Chef",
    text: "",
    label: false,
  },
  {
    id: 5,
    img: "/images/team-1.png",
    name: "Jonas Hanks",
    price: "Manager",
    text: "",
    label: false,
  },
  {
    id: 6,
    img: "/images/team-6.png",
    name: "Tom Splinder",
    price: "Sales person",
    text: "",
    label: false,
  },
];

const suppliesData = [
  {
    id: 1,
    img: "/supplies-1.svg",
    name: "",
    price: "",
    text: "",
    label: false,
    onlyImage: true,
  },
  {
    id: 2,
    img: "/supplies-2.svg",
    name: "",
    price: "",
    text: "",
    label: false,
    onlyImage: true,
  },
  {
    id: 3,
    img: "/supplies-3.svg",
    name: "",
    price: "",
    text: "",
    label: false,
    onlyImage: true,
  },
  {
    id: 4,
    img: "/supplies-4.svg",
    name: "",
    price: "",
    text: "",
    label: false,
    onlyImage: true,
  },
  {
    id: 5,
    img: "/supplies-5.svg",
    name: "",
    price: "",
    text: "",
    label: false,
    onlyImage: true,
  },
];
