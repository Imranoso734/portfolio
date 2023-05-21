import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio website
        </SectionTitle>
        <SectionText>
          As a full stack developer with 5 years of experience, I have expertise in a wide range of technologies and frameworks. My core focus has been on NodeJS, RestFull API's, Laravel, MySql, PHP, ReactJS, NextJS, JavaScript. With a strong foundation in backend development using Laravel and NodeJS, I have successfully built robust and scalable web applications. Additionally, I am proficient in frontend development using NextJs, ReactJS and allowing me to create dynamic and intuitive user interfaces.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
