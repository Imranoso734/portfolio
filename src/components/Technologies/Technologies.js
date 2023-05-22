import React from "react";
import { DiNodejsSmall, DiReact, DiWordpress, DiLaravel, DiGithubBadge, DiCss3, DiBootstrap, DiJavascript1, DiMysql, DiPhp, DiPostgresql, DiSass } from "react-icons/di";
import { FaShopify } from 'react-icons/fa';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

import TechnologyCompo from "./TechnologyCompo";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Throughout my career, I have gained extensive experience working with various technologies to achieve user goals. I specialize in building scalable and maintainable web applications.
    </SectionText>
    <List>

      <TechnologyCompo
        icon={DiNodejsSmall}
        title="NodeJS"
        text="I have extensive experience in designing, developing, and consuming RESTful APIs."
      />

      <TechnologyCompo
        icon={DiReact}
        title="NextJs"
        text=" I have a strong background in developing dynamic and intuitive user interfaces. I have worked extensively with front-end development using NextJs"
      />
      
      <TechnologyCompo
        icon={DiLaravel}
        title="Laravel"
        text="Laravel a powerful PHP framework. Over the years, I have utilized Laravel's robust features and conventions to build scalable and efficient web applications."
      />
     
      <TechnologyCompo
        icon={FaShopify}
        title="Shopify"
        text="I have experience with Shopify, including various aspects such as store development, theme customization, app integration, and more."
      />
     
      <TechnologyCompo
        icon={DiWordpress}
        title="Wordpress"
        text=" I have experience with WordPress, specifically in custom theme development and plugin development."
      />
    
      <TechnologyCompo
        icon={DiPhp}
        title="PHP"
        text="PHP is a widely used programming language that I have significant experience with. I have worked extensively with PHP to develop dynamic and interactive web applications."
      />
    
        
      <TechnologyCompo
        icon={DiJavascript1}
        title="Javascript"
        text="I have extensive experience in frontend development using JavaScript. JavaScript is a versatile programming language that allows me to create dynamic and interactive user interfaces."
      />

      <TechnologyCompo
        icon={DiMysql}
        title="MySql"
        text="  During my professional journey, I have gained significant experience in working with databases, particularly using MySQL."
      />

      <TechnologyCompo
        icon={DiPostgresql}
        title="Postgresql"
        text="When it comes to PostgreSQL, I am familiar with its capabilities and have experience working with this powerful relational database management system. I have successfully utilized PostgreSQL in various projects to store and manage data efficiently."
      />

      <TechnologyCompo
        icon={DiCss3}
        title="Css3"
        text="I have a strong background in CSS3, which is a crucial technology for designing and styling web pages. With CSS3"
      />
    
    
      <TechnologyCompo
        icon={DiSass}
        title="Sass"
        text=" I have experience with Sass, a powerful CSS preprocessor that extends the capabilities of traditional CSS."
      />
    
      <TechnologyCompo
        icon={DiBootstrap}
        title="Bootstrap"
        text="I have extensive experience working with Bootstrap, one of the most popular CSS frameworks."
      />
     

    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
