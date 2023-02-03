import { type NextPage } from "next";
import MyHead from "../components/MyHead";
import { Navbar } from "../components/NavBar";
import {Main} from "../components/Main";
import {MainHeader} from "../components/MainHeader";
import {Paragraph} from "../components/Paragraph";
import { Body } from "../components/Body";

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

        </Main>
      </Body>

    </>
  );
};

export default About;
