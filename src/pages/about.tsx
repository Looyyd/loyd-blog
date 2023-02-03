import { type NextPage } from "next";
import MyHead from "../components/MyHead";
import { Navbar } from "../components/NavBar";
import {Main} from "../components/Main";
import {MainHeader} from "../components/MainHeader";
import {Paragraph} from "../components/Paragraph";

const About: NextPage = () => {
  return (
    <>
      <MyHead page={"About"}></MyHead>
      <Navbar></Navbar>

      <Main>
        <MainHeader title={"About Me"}/>
        <Paragraph>
          Hi, I'm Filip. I'm a computer science student. I'm currently doing an Internship at Paris based cybersecurity consulting firm I-Tracing.
          This is my personal website. I use it as a business card and to write some blogs
          on subjects I'm passionate about, such as cybersecurity, business or technology.
        </Paragraph>

      </Main>

    </>
  );
};

export default About;
