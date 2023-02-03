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
            Hi, I'm Filip. I'm a computer science student. I'm currently doing an Internship at Paris based cybersecurity consulting firm I-Tracing.
            This is my personal website. I use it as a business card and to write some blogs
            on subjects I'm passionate about, such as cybersecurity, business or technology.
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
