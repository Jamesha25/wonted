import React from "react";
import Achievement from "../achievement";
import Achievev3 from "../achievev3";
import Authorv3 from "../authorv3";
import ChapterPreviewv2 from "../chapter-preview-v2";
import Chapterv2 from "../chapterv2";
import Contact from "../contact";
import Cta from "../cta";
import Ctav5 from "../ctav5";
import Footer from "../global/footer";
import Header from "../global/header";
import Herov3 from "../herov3";
import Pricing from "../pricing";
import Testimonial from "../charactersCus";

const Version03 = ({header, footer}) => {
  const {menu} = footer;
  return (
    <>
      <Header header={header}/>
      <Herov3 isBg="yes"/>
      <Achievev3 isBg=""/>
      <Chapterv2 isBg="yes"/>
      <ChapterPreviewv2 isBg=""/>
      <Pricing isBg="yes"/>
      <Cta isBg=""/>
      <Authorv3 isBg="yes"/>
      <Achievement isBg=""/>
      <Ctav5 isBg=""/>
      <Testimonial isBg="yes"/>
      <Contact isBg=""/>
      <Footer isBg="yes" menu={menu}/>
    </>
  );
};

export default Version03;
