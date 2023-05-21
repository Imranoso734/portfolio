import React from "react";
import { DiNodejsSmall, DiReact, DiWordpress, DiLaravel, DiGithubBadge, DiCss3, DiBootstrap ,DiJavascript1, DiMysql, DiPhp, DiPostgresql, DiSass } from "react-icons/di";
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

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Throughout my career, I have gained extensive experience working with various technologies to achieve user goals. I specialize in building scalable and maintainable web applications.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
          <ListParagraph>
            I have extensive experience in designing, developing, and consuming RESTful APIs.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>NextJs</ListTitle>
          <ListParagraph>
            I have a strong background in developing dynamic and intuitive user interfaces. I have worked extensively with front-end development using NextJs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiLaravel size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Laravel</ListTitle>
          <ListParagraph>
           Laravel a powerful PHP framework. Over the years, I have utilized Laravel's robust features and conventions to build scalable and efficient web applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>
     
      <ListItem>
        <picture>
          <FaShopify size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Shopify</ListTitle>
          <ListParagraph>
            I have experience with Shopify, including various aspects such as store development, theme customization, app integration, and more.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiWordpress size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Wordpress</ListTitle>
          <ListParagraph>
            I have experience with WordPress, specifically in custom theme development and plugin development.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiPhp size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>PHP</ListTitle>
          <ListParagraph>
            PHP is a widely used programming language that I have significant experience with. I have worked extensively with PHP to develop dynamic and interactive web applications.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiJavascript1 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <ListParagraph>
            I have extensive experience in frontend development using JavaScript. JavaScript is a versatile programming language that allows me to create dynamic and interactive user interfaces.
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiMysql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MySql</ListTitle>
          <ListParagraph>
            During my professional journey, I have gained significant experience in working with databases, particularly using MySQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
            
      <ListItem>
        <picture>
          <DiPostgresql size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Postgresql</ListTitle>
          <ListParagraph>
            When it comes to PostgreSQL, I am familiar with its capabilities and have experience working with this powerful relational database management system. I have successfully utilized PostgreSQL in various projects to store and manage data efficiently. 
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiCss3 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Css3</ListTitle>
          <ListParagraph>
            I have a strong background in CSS3, which is a crucial technology for designing and styling web pages. With CSS3
          </ListParagraph>
        </ListContainer>
      </ListItem>
     
      <ListItem>
        <picture>
          <DiSass size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Sass</ListTitle>
          <ListParagraph>
            I have experience with Sass, a powerful CSS preprocessor that extends the capabilities of traditional CSS.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiBootstrap size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
          <ListParagraph>
            I have extensive experience working with Bootstrap, one of the most popular CSS frameworks.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    

      {/* <ListItem>
        <picture>
          <DiGithubBadge size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>GitHub</ListTitle>
          <ListParagraph>
            Experience with <br />
            Version Control system
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
