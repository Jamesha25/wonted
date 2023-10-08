import React from "react";
import AchievementV2 from "../achievementv2";
import Achievev2 from "../achievev2";
import Authorv3 from "../authorv3";
import ChapterPreviewV2 from "../chapter-preview-v2";
import Chapterv2 from "../chapterv2";
import Contact from "../contact";
import Ctav2 from "../ctav2";
import FunFacts from "../fun-facts";
import Footer from "../global/footer";
import Header from "../global/header";
import Herov2 from "../herov2";
import Pricing from "../pricing";
import Testimonial from "../testimonial";

const Version02 = ({header, footer}) => {
  const {menu} = footer;
  return (
    <>
      <Header header={header} />
      <Herov2 isBg=""/>
      <Achievev2 isBg=""/>
      <Chapterv2 isBg="yes" />
      <Ctav2 isBg=""/>
      <ChapterPreviewV2 isBg="" />
      <Pricing isBg="yes"/>
      <Authorv3 isBg="yes"/>
      <AchievementV2 isBg="yes"/>
      <FunFacts isBg="" />
      <Testimonial isBg=""/>
      <Contact isBg=""/>
      <Footer isBg="yes" menu={menu} />
    </>
  );
};

export default Version02;
