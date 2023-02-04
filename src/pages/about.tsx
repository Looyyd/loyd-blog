import { type NextPage } from "next";
import MyHead from "../components/MyHead";
import { Navbar } from "../components/NavBar";
import {Main} from "../components/Main";
import {MainHeader} from "../components/MainHeader";
import {Paragraph} from "../components/Paragraph";
import { Body } from "../components/Body";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
      <MyHead page={"About"}></MyHead>
      <Body>
        <Navbar></Navbar>

        <Main>
          <MainHeader title={"About Me"}/>
          <Paragraph>
            Hi, I'm Filip, a French cybersecurity student with a passion for technology and innovation.
            As a current intern at I-Tracing, a Paris-based cybersecurity consulting firm, I specialize in cloud security audits and have gained extensive experience in securing Azure infrastructures.
            Follow me on my social media channels where I share my knowledge and insights on cybersecurity and computer science.
            I'm always eager to learn and grow in this field, and I hope to inspire others to do the same.
          </Paragraph>
          <h1>Socials</h1>
            <Link href={'https://twitter.com/filip_loyd'}>Twitter</Link>
            <Link href={'https://www.linkedin.com/in/filip-niedzielski/'}>LinkedIn</Link>
            <Link href={'https://github.com/Looyyd'}>Github</Link>

          <h1>CTF platforms profiles</h1>
          <Link href={'https://www.root-me.org/LOOYYD'}>Root-Me</Link>
          <Link href={'https://app.hackthebox.com/users/517909'}>Hack The Box</Link>
          <Link href={'https://tryhackme.com/p/LOOYYD'}>TryHackMe</Link>

        </Main>
      </Body>

    </>
  );
};

export default About;
