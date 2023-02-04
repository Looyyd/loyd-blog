import { type NextPage } from "next";
import MyHead from "../components/MyHead";
import { Navbar } from "../components/NavBar";
import {Main} from "../components/Main";
import {MainHeader} from "../components/MainHeader";
import {Paragraph} from "../components/Paragraph";
import { Body } from "../components/Body";
import { LinkButton } from "../components/LinkButton";

const About: NextPage = () => {
  return (
    <>
      <MyHead page={"About"}></MyHead>
      <Body>
        <Navbar></Navbar>

        <Main>
          <MainHeader title={"About Me"}/>
          <Paragraph>
            Hi, I&lsquo;m Filip, a French cybersecurity student with a passion for technology and innovation.
            As a current intern at I-Tracing, a Paris-based cybersecurity consulting firm, I specialize in cloud security audits and have gained experience in securing Azure infrastructures.
          </Paragraph>
          <Paragraph>
            Follow me on my socials where I share my knowledge and insights on cybersecurity and computer science.
            I&lsquo;m always eager to learn and grow in this field, and I hope to inspire others to do the same.
          </Paragraph>
          <h1>Socials</h1>
          <LinkButton link={"https://twitter.com/filip_loyd"} content={"Twitter"}/>
          <LinkButton link={"https://www.linkedin.com/in/filip-niedzielski/"} content={"LinkedIn"}/>
          <LinkButton link={"https://github.com/Looyyd"} content={"GitHub"}/>

          <h1>CTF platforms profiles</h1>
          <LinkButton link={"https://www.root-me.org/LOOYYD"} content={"Root-Me"}/>
          <LinkButton link={"https://app.hackthebox.com/users/517909"} content={"Hack The Box"}/>
          <LinkButton link={"'https://tryhackme.com/p/LOOYYD"} content={"TryHackMe"}/>

        </Main>
      </Body>

    </>
  );
};

export default About;
