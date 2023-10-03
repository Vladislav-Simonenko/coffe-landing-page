import { AdvantagesDivider } from "@/components/atoms";
import { MainContentSlider, Products } from "@/components/organisms";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <MainContentSlider />
      <AdvantagesDivider data={dividerText} />
      <Products />
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
