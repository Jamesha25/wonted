import React from "react";
// import AchievementV2 from "../achievementv2";
// import Achievev2 from "../achievev2";
import Authorv3 from "../authorv3";
// import ChapterPreviewV2 from "../chapter-preview-v2";
// import Chapterv2 from "../chapterv2";
// import Contact from "../contact";
import Ctav2 from "../ctav2";
// import FunFacts from "../fun-facts";
import CusFooter from "../global/cusFooter";
import Header from "../global/header";
import Herov2 from "../herov2";
// import Pricing from "../pricing";
import Testimonial from "../testimonial";
import Characters from "../charactersCus";
import BookAbout from "../bookAboutCus";

const Version02 = ({header, footer}) => {
  const {menu} = footer;
  return (
    <>
      <Header header={header} />
      <Herov2 isBg=""/>
      <Characters isBg=""/>
      {/* <Achievev2 isBg=""/> */}
      {/* <Chapterv2 isBg="yes" /> */}
      {/* <Ctav2 isBg=""/> */}
      {/* <ChapterPreviewV2 isBg="" /> */}
      {/* <Pricing isBg="yes"/> */}
      <BookAbout isBg=""/>
      <Authorv3 isBg=""/>
      {/* <AchievementV2 isBg="yes"/> */}
      {/* <FunFacts isBg="" /> */}
      {/* <Contact isBg=""/> */}
      <Testimonial isBg=""/>
      <CusFooter/>
    </>
  );
};

export default Version02;
