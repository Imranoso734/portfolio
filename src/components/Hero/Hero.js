import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "../Projects/ProjectsStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To the House Of Technology
          {/* My Personal Portfolio website */}
          <Img src={'/logo_1.png'} />
        </SectionTitle>
        <SectionText>
          As a full stack developer with 5 years of experience, I have expertise in a wide range of technologies and frameworks. My core focus has been on NodeJS, RestFull API's, Laravel, MySql, PHP, WordPress , ReactJS, NextJS, JavaScript. With a strong foundation in backend development using NodeJS and Laravel, I have successfully built robust and scalable web applications. Additionally, I am proficient in frontend development using NextJs, ReactJS , HTML5 , CSS3 , Tailwind , Bootstrap and allowing me to create dynamic and intuitive user interfaces.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
