import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}>

        <DiCssdeck size="3rem" /> <span>Portfolio</span>

      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/technologies" legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    {/* <Div3>
      <SocialIcons target="_blank" href="https://github.com/ESKINDERTSEGAYE">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://www.linkedin.com/in/eskinder-tsegaye-4a917b186/"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons>
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3> */}
  </Container>
);

export default Header;
