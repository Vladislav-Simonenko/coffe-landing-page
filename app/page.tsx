import { AdvantagesDivider, Banner, TextDivider } from "@/components/atoms";
import {
  Contacts,
  MainContentSlider,
  ProductList,
  Products,
  Rating,
  ReserveTable,
} from "@/components/organisms";
import { FoodMenu } from "@/components/organisms/FoodMenu/FoodMenu";
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
      <ProductList />
      <FoodMenu />
      <ReserveTable />
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
